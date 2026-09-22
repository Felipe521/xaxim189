import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatementSection from "@/components/StatementSection";
import Intro from "@/components/Intro";
import PropertyStats from "@/components/PropertyStats";
import ArchitectureMoment from "@/components/ArchitectureMoment";
import FloorSection from "@/components/FloorSection";
import MasterSuite from "@/components/MasterSuite";
import Gallery from "@/components/Gallery";
import EmotionalSection from "@/components/EmotionalSection";
import Location from "@/components/Location";
import ConstructionStatus from "@/components/ConstructionStatus";
import TransparencyNotice from "@/components/TransparencyNotice";
import PriceSection from "@/components/PriceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { galleryImages } from "@/data/property";

const img = (name: string) => galleryImages.find((i) => i.src.includes(name))!;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <StatementSection
          lines={["Espaço para viver.", "Espaço para receber.", "Espaço para ser seu."]}
          accentLine={2}
        />

        <Intro />
        <PropertyStats />
        <ArchitectureMoment />

        <FloorSection
          id="terreo"
          index="01"
          subtitle="Piso térreo"
          title="Onde a casa acontece."
          description="Hall de entrada elegante e um amplo living para dois ambientes, integrando sala de estar, sala de jantar e cozinha americana."
          features={[
            "Hall de entrada elegante",
            "Amplo living para 2 ambientes",
            "Sala de estar",
            "Sala de jantar",
            "Cozinha americana",
            "Lavabo de apoio",
          ]}
          images={[img("social-living-ampla"), img("terreo-lavabo")]}
        />

        <FloorSection
          id="superior"
          index="02"
          subtitle="Piso superior"
          title="Onde o dia termina."
          description="Três suítes espaçosas organizadas em torno de um corredor silencioso — a área mais íntima e privada da casa."
          features={["3 suítes espaçosas", "1 suíte master com espaço diferenciado", "Corredor privativo"]}
          images={[img("superior-suite-quarto-a"), img("superior-suite-banheiro-a")]}
          tone="dark"
          reverse
        />

        <FloorSection
          id="subsolo"
          index="03"
          subtitle="Subsolo"
          title="Onde a casa ganha outra dimensão."
          description="Um pavimento pensado para o dia a dia e para receber, com espaço amplo, lavanderia separada e quatro vagas de garagem."
          features={[
            "Ampla área para futuro espaço gourmet",
            "Lavanderia separada",
            "Lavabo de apoio",
            "4 vagas — 2 cobertas e 2 descobertas",
          ]}
          images={[img("subsolo-escada"), img("corredor-passagem")]}
          highlight={{
            title: "Um espaço esperando pela sua ideia.",
            text: "A ampla área do subsolo pode receber um futuro espaço gourmet — o potencial é seu para desenhar.",
          }}
        />

        <MasterSuite />
        <Gallery />
        <EmotionalSection />
        <Location />
        <ConstructionStatus />
        <TransparencyNotice />
        <PriceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
