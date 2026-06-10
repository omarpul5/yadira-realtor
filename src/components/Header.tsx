"use client";
import Link from "next/link";
import { Home, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link href="/propiedades" className="text-gray-600 hover:text-[#0284C7] font-medium">PROPIEDADES</Link>
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
          <Link href="/" className="text-gray-600 font-medium">INICIO</Link>
          <Link href="/propiedades" className="text-gray-600 font-medium">PROPIEDADES</Link>
          <Link href="/nosotros" className="text-gray-600 font-medium">NOSOTROS</Link>
          <Link href="/contacto" className="text-gray-600 font-medium">CONTACTO</Link>
        </nav>
      )}
    </header>
  );
}