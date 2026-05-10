import GlobeHero from "@/components/sections/GlobeHero";
import HeroContent from "@/components/sections/HeroContent";
import IdentitySection from "@/components/sections/IdentitySection";
import MeaningSection from "@/components/sections/MeaningSection";
import RelationSection from "@/components/sections/RelationSection";
import PresenceSection from "@/components/sections/PresenceSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-navy-900">
      {/* Cinematic 3D Background */}
      <div className="fixed inset-0 z-0">
        <GlobeHero />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <HeroContent />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-16 lg:gap-24 pb-16 lg:pb-24">
          <IdentitySection />
          <MeaningSection />
          <RelationSection />
          <PresenceSection />
          <FAQSection />
        </div>
      </div>
    </div>
  );
}