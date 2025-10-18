import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import EcoboyaWhySection from "@/components/About/EcoboyaWhySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Precios | Ecoboya - Soluciones Sostenibles",
  description: "Planes y soluciones de Ecoboya para la protección de cuerpos de agua.",
};

const PricingPage = () => {
  return (
    <>
            <Pricing titulo="Planes Ecoboya" descripcion="Elige el plan que mejor se adapte a tu proyecto de protección ambiental." />
      <EcoboyaWhySection />
      <Faq />
    </>
  );
};

export default PricingPage;
