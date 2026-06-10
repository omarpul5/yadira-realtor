import Link from "next/link";
import { Home, Camera, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Columna 1: Branding */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Home className="text-[#0284C7]" />
            <h2 className="text-xl font-bold">YADIRA PORTUONDO</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Asesoría inmobiliaria profesional, transparente y dedicada para que encuentres tu lugar ideal en Miami y el Sur de la Florida.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h3 className="font-bold mb-4">ENLACES RÁPIDOS</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/propiedades">Propiedades</Link></li>
            <li><Link href="/nosotros">Sobre Mí</Link></li>
          </ul>
        </div>

        {/* Columna 3: Servicios */}
        <div>
          <h3 className="font-bold mb-4">SERVICIOS</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Compra de Vivienda</li>
            <li>Venta de Propiedades</li>
            <li>Alquiler / Rentas</li>
            <li>Asesoría para Inversionistas</li>
          </ul>
        </div>

        {/* Columna 4: Sígueme */}
        <div>
          <h3 className="font-bold mb-4">SÍGUEME</h3>
          <div className="flex gap-4">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
              <Camera size={20} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Línea divisoria y Copyright */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        © 2026 Yadira Portuondo Realtor. Todos los derechos reservados.
      </div>
    </footer>
  );
}