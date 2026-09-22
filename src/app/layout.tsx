import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { property } from "@/data/property";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://xaxim189.com.br";
const title = "Sobrado de 189m² com 3 Suítes à Venda no Xaxim | Curitiba";
const description =
  "Sobrado de 189m² com 3 suítes, 4 vagas e ampla área para lazer no Xaxim, em Curitiba. Conheça o projeto e entre em contato.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: property.code,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/fachada.jpg", width: 1600, height: 900, alt: "Fachada do sobrado no Xaxim" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/fachada.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SingleFamilyResidence",
    name: `Sobrado ${property.area}m² — ${property.neighborhood}, ${property.city}`,
    description,
    numberOfRooms: property.bedrooms,
    numberOfBathroomsTotal: 5,
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.area,
      unitCode: "MTK",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address,
      addressLocality: property.city,
      addressRegion: property.state,
      addressCountry: "BR",
    },
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full bg-cream font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LoadingScreen />
        <ScrollProgress />
        {children}
        <WhatsAppButton />
        <MobileCTA />
      </body>
    </html>
  );
}
