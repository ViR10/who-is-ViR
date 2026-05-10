"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Line } from "@react-three/drei";
import * as THREE from "three";
import { FloatingDots } from "@/components/ui/floating-dots";

interface CountryFeature {
  type: "Feature";
  geometry: {
    type: "MultiPolygon" | "Polygon";
    coordinates: number[][][][] | number[][][];
  };
  properties: {
    name?: string;
    NAME?: string;
  };
}

function GlobeCountries() {
  const [countries, setCountries] = useState<CountryFeature[]>([]);
  const groupRef = useRef<THREE.Group>(null);
  const globeRadius = 1.005;

  useEffect(() => {
    fetch("/countries-110m.geojson")
      .then((response) => response.json())
      .then((data) => setCountries(data.features));
  }, []);

  const convertCoordinates = (lon: number, lat: number) => {
    const phi = THREE.MathUtils.degToRad(lon);
    const theta = THREE.MathUtils.degToRad(90 - lat);

    return new THREE.Vector3(
      globeRadius * Math.sin(theta) * Math.cos(phi),
      globeRadius * Math.sin(theta) * Math.sin(phi),
      globeRadius * Math.cos(theta)
    );
  };

  return (
    <group ref={groupRef}>
      {countries.map((country, i) => {
        // Normalize to MultiPolygon format
        const coordinates: number[][][][] =
          country.geometry.type === "MultiPolygon"
            ? (country.geometry.coordinates as number[][][][])
            : [(country.geometry.coordinates as number[][][])];

        return coordinates.flatMap((polygon, pi) =>
          polygon.flatMap((ring, ri) => {
            const positions = ring.map((coord) => {
              const [lon, lat] = coord as [number, number];
              return convertCoordinates(lon, lat);
            });

            return (
              <Line
                key={`${i}-${pi}-${ri}`}
                points={positions}
                color="#60a5fa"
                lineWidth={0.5}
                transparent
                opacity={0.7}
              />
            );
          })
        );
      })}
    </group>
  );
}

function Globe() {
  const groupRef = useRef<THREE.Group>(null);
  const indiaLon = 78.9629;
  const indiaLat = 20.5937;

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        THREE.MathUtils.degToRad(-indiaLon) + clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group
      ref={groupRef}
      rotation={[THREE.MathUtils.degToRad(-indiaLat), 0, 0]}
    >
      {/* Main globe sphere */}
      <Sphere args={[0.97, 64, 64]}>
        <meshPhongMaterial
          color="#0d1b33"
          opacity={0.97}
          transparent
          specular="#204080"
          shininess={5}
        />
      </Sphere>

      {/* Atmosphere glow */}
      <Sphere args={[1.02, 64, 64]}>
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Country borders */}
      <GlobeCountries />
    </group>
  );
}

export function GlobeHero() {
  return (
    <div
      className="relative w-full h-screen"
      style={{ background: "linear-gradient(to bottom, #020917, #030d1f)" }}
    >
      <FloatingDots
        className="w-full"
        maxRadius={0.8}
        maxSpeed={0.5}
        minSpeed={0.05}
        count={80}
      />
      <div className="absolute inset-0">
        <Canvas
          camera={{
            position: [0, 0.4, 2.2],
            fov: 75,
          }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.75} />
          <directionalLight position={[3, 3, 3]} intensity={1.5} color="#7dd3fc" />
          <directionalLight position={[-3, -2, -3]} intensity={0.3} color="#312e81" />
          <Globe />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.3}
            autoRotate
            autoRotateSpeed={0.5}
            minDistance={1.5}
            maxDistance={3}
            target={[0, 0.2, 0]}
          />
        </Canvas>
      </div>
      {/* Bottom fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 40%, rgba(3,9,23,0.6) 72%, rgb(3,7,18) 100%)",
        }}
      />
    </div>
  );
}

export default GlobeHero;
