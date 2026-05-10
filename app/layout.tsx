import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://whoisvir.netlify.app"),
  title: {
    default: "Who Is ViR? The Digital Identity of Adeel | Founder of ViR Developers",
    template: "%s | Who Is ViR",
  },
  description: "Who is ViR? Discover the meaning of ViR, how it relates to Adeel, and why ViR is the digital identity of Adeel, CEO and Founder of ViR Developers.",
  keywords: [
    "who is vir",
    "vir meaning",
    "vir ka mtlb",
    "who is ViR",
    "ViR identity",
    "digital identity of Adeel",
    "second identity of Adeel",
    "Adeel second name",
    "Adeel digital identity",
    "ViR Developers founder",
    "ViR Developers CEO",
    "ViR by Adeel",
    "who is behind ViR",
    "who owns ViR Developers",
    "Adeel founder of ViR Developers",
    "what is ViR",
    "meaning of ViR name",
    "personal brand of Adeel",
    "online identity of Adeel",
    "creator identity of Adeel",
    "tech identity of Adeel",
    "founder profile Adeel",
    "about ViR and Adeel",
    "vir ka mtlb kya hai",
    "adeel ka second identity kya hai",
    "adeel ki digital identity kya hai",
    "who is vir developers founder",
  ],
  authors: [{ name: "Adeel", url: "https://whoisvir.netlify.app" }],
  creator: "Adeel",
  publisher: "ViR Developers",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://whoisvir.netlify.app/",
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/log.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      url: "/log.png",
    },
  ],
  manifest: "/manifest.json",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://whoisvir.netlify.app/",
    siteName: "Who Is ViR",
    title: "Who Is ViR? The Digital Identity of Adeel",
    description: "ViR is the digital identity of Adeel — CEO and Founder of ViR Developers. Explore the meaning, story, and branding behind ViR.",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Who Is ViR - The Digital Identity of Adeel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who Is ViR? The Digital Identity of Adeel",
    description: "Meet ViR, the digital identity of Adeel and the founder vision behind ViR Developers.",
    images: ["/image.png"],
    creator: "@adeelshahid",
  },
  other: {
    "og:image:alt": "Who Is ViR - The Digital Identity of Adeel, CEO and Founder of ViR Developers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2026-05-10T00:00:00+05:00",
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: "Adeel",
      alternateName: ["ViR", "vir"],
      description: "Adeel is the CEO and Founder of ViR Developers. ViR is the digital identity and branded second name of Adeel.",
      url: "https://whoisvir.netlify.app/",
      image: [
        "https://whoisvir.netlify.app/image.png",
      ],
      jobTitle: "CEO and Founder",
      worksFor: {
        "@type": "Organization",
        name: "ViR Developers",
        url: "https://virdevelopers.netlify.app/",
      },
      sameAs: [
        "https://virdevelopers.netlify.app/",
      ],
    },
  };

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ViR Developers",
    url: "https://virdevelopers.netlify.app/",
    founder: {
      "@type": "Person",
      name: "Adeel",
      alternateName: "ViR",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
      </head>
      <body
        className={`${inter.className} text-gray-100 antialiased`}
        style={{ background: "#030712" }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}