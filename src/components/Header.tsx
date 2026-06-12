"use client";
import Link from "next/link";
import { Home, Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Función para manejar el clic en propiedades
  const handlePropertiesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      // Si ya estás en el inicio, haz scroll suave
      const element = document.getElementById("properties");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    } else {
      // Si estás en otra página, navega al inicio con el hash
      router.push("/#properties");
    }
  };

  return (
    <header className="bg-white py-4 shadow-md sticky top-0 z-50 px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Home className="text-[#0284C7]" />
          <h1 className="text-xl font-bold">YADIRA PORTUONDO</h1>
        </Link>

        {/* Menú de navegación (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-600 hover:text-[#0284C7] font-medium">INICIO</Link>
          <button onClick={handlePropertiesClick} className="text-gray-600 hover:text-[#0284C7] font-medium">PROPIEDADES</button>
          <Link href="/nosotros" className="text-gray-600 hover:text-[#0284C7] font-medium">NOSOTROS</Link>
          <Link href="/contacto" className="text-gray-600 hover:text-[#0284C7] font-medium">CONTACTO</Link>
          <Link href="/contacto" className="bg-[#0284C7] text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition">
            CONTÁCTANOS
          </Link>
        </nav>

        {/* Botón menú móvil */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <nav className="md:hidden mt-4 bg-white border-t p-4 flex flex-col gap-4">
          <Link href="/" className="text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>INICIO</Link>
          <button 
            className="text-gray-600 font-medium text-left" 
            onClick={handlePropertiesClick}
          >
            PROPIEDADES
          </button>
          <Link href="/nosotros" className="text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>NOSOTROS</Link>
          <Link href="/contacto" className="text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>CONTACTO</Link>
        </nav>
      )}
    </header>
  );
}