// src/app/page.tsx
import RealEstateContent from "./RealEstateContent";

// Aquí los buscadores leen quién eres
export const metadata = {
  title: "Yadira Portuondo | Bienes Raíces en Miami",
  description: "Asesoría profesional en compra, venta y renta de propiedades en Miami. Encuentra tu hogar ideal con Yadira Portuondo.",
  openGraph: {
    title: "Yadira Portuondo | Bienes Raíces en Miami",
    images: ["/yadira-professional.png"],
  },
};

// Aquí importamos el contenido visual que creamos en el Paso 1
export default function Page() {
  return <RealEstateContent />;
}