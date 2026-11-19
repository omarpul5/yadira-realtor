"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, MapPin, Phone, Mail, Star, Home as HomeIcon, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

  // Ícono SVG nativo para Instagram (Evita errores de lucide-react)
const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Home() {
  // --- ESTADOS DEL COMPONENTE ---
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [properties, setProperties] = useState<any[]>([]);
  
  // Estado de carga para la base de datos
  const [loading, setLoading] = useState(true); 
  
  // Estados del formulario de contacto
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false); // Estado para el botón de enviar
  const [isMounted, setIsMounted] = useState(false);

  // Fetch Properties desde Supabase
  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true); // Encendemos el estado de carga
      const { data, error } = await supabase.from("properties").select("*");
      if (error) {
        console.error("Error fetching properties:", error);
      } else {
        setProperties(data || []);
      }
      setLoading(false); // Apagamos el estado de carga al terminar
    };
    fetchProperties();
  }, []);
  

// --- PRUEBA DE CONEXIÓN A SUPABASE ---
useEffect(() => {
  const testConnection = async () => {
    try {
      const { data, error } = await supabase.from("properties").select("count");
      if (error) {
        console.error("❌ ERROR DE CONEXIÓN:", error.message);
      } else {
        console.log("✅ CONEXIÓN EXITOSA. Propiedades encontradas:", data);
      }
    } catch (err) {
      console.error("❌ ERROR CRÍTICO AL CONECTAR:", err);
    }
  };
  testConnection();
}, []);

  // Manejo del Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Cargar Favoritos
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
    setIsMounted(true);
  }, []); 

  // Guardar Favoritos
  useEffect(() => {
    if (isMounted) localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites, isMounted]);

  // JSON-LD Schema para SEO Local
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Yadira Portuondo Realtor",
    "image": "https://tudominio.com/yadira-professional.png",
    "description": "Asesoría inmobiliaria en Miami, especializada en la compra, venta y renta de casas y apartamentos para familias e inversionistas.",
    "url": "https://tudominio.com",
    "telephone": "+13056290218",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "priceRange": "$$"
  };

  return (
    <main className="min-h-screen scroll-smooth bg-white text-[#1E293B] selection:bg-[#0284C7] selection:text-white">
      {/* Script SEO para Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HERO SECTION - Imagen de Miami optimizada */}
<section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-32 md:px-6 md:pt-40">
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&w=2070&auto=format&fit=crop"
      alt="Skyline de Miami y Bahía de Biscayne"
      className="h-full w-full object-cover brightness-[0.80]"
    />
  </div>
  
  {/* Gradiente adicional para asegurar legibilidad total */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/40 via-transparent to-transparent" />

        {/* Gradiente más suave y brillante para un look general */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E293B]/60 via-[#1E293B]/40 to-transparent" />

        {/* NAVBAR */}
        <header
          className={`fixed top-0 z-50 w-full px-6 transition-all duration-300 ${
            scrolled
              ? "bg-white py-4 shadow-md"
              : "bg-transparent py-6"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link href="#home" aria-label="Inicio Yadira Realtor" className="flex items-center gap-2">
              <HomeIcon className={`h-8 w-8 ${scrolled ? "text-[#0284C7]" : "text-white"}`} />
              <div>
                <h1 className={`text-2xl font-bold tracking-tight transition-colors ${scrolled ? "text-[#1E293B]" : "text-white"}`}>
                  YADIRA PORTUONDO
                </h1>
                <p className={`text-xs font-medium tracking-wide transition-colors ${scrolled ? "text-[#64748B]" : "text-gray-200"}`}>
                  REALTOR® MIAMI
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden gap-8 text-sm font-semibold lg:flex" aria-label="Navegación Principal">
              {[
                { name: 'INICIO', link: '#home' },
                { name: 'PROPIEDADES', link: '#properties' },
                { name: 'NOSOTROS', link: '#about' },
                { name: 'CONTACTO', link: '#contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`transition-all duration-300 hover:text-[#0284C7] ${scrolled ? "text-[#475569]" : "text-white"}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden transition-colors ${scrolled ? "text-[#1E293B]" : "text-white"}`}
              aria-label="Abrir menú"
            >
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            <Link
              href="#contact"
              className={`hidden rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 lg:block
                ${scrolled 
                  ? "bg-[#0284C7] text-white hover:bg-[#0369A1] shadow-md" 
                  : "bg-white text-[#0284C7] hover:bg-gray-100"}`}
            >
              CONTÁCTANOS
            </Link>
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <nav className="absolute left-0 top-full w-full bg-white px-6 py-6 shadow-xl lg:hidden flex flex-col gap-4 text-center text-[#1E293B]">
              {[
                { name: 'INICIO', link: '#home' },
                { name: 'PROPIEDADES', link: '#properties' },
                { name: 'NOSOTROS', link: '#about' },
                { name: 'CONTACTO', link: '#contact' }
              ].map((item) => (
                <Link 
                  key={item.name} 
                  href={item.link} 
                  onClick={() => setMenuOpen(false)} 
                  className="text-base font-semibold hover:text-[#0284C7] py-2 border-b border-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto w-full max-w-4xl text-center mt-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h2 className="mb-4 text-sm font-bold tracking-widest text-white drop-shadow-md">
              BIENES RAÍCES EN EL SUR DE LA FLORIDA
            </h2>
            <h3 className="mb-6 text-4xl font-extrabold leading-tight text-white drop-shadow-lg md:text-6xl">
              Encuentra tu hogar ideal <br className="hidden md:block"/> en Miami
            </h3>
            <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-white drop-shadow-md md:text-xl">
              Te acompañamos paso a paso en la compra, venta o renta de tu propiedad con total transparencia y confianza.
            </p>

            {/* SEARCH BOX */}
            <div className="rounded-2xl bg-white p-4 shadow-xl md:p-4 mx-auto max-w-4xl border border-gray-100">
              <div className="grid gap-3 md:grid-cols-4">
                <input
                  type="text"
                  placeholder="Ciudad o Zona..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="rounded-xl bg-gray-50 px-4 py-3 text-sm border border-transparent outline-none transition focus:border-[#0284C7] focus:bg-white"
                />

                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="rounded-xl bg-gray-50 px-4 py-3 text-sm border border-transparent outline-none focus:border-[#0284C7] focus:bg-white text-gray-700"
                >
                  <option value="All">Tipo de Propiedad</option>
                  <option value="Casa">Casa</option>
                  <option value="Apartamento">Apartamento</option>
                  <option value="Condominio">Condominio</option>
                </select>

                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="rounded-xl bg-gray-50 px-4 py-3 text-sm border border-transparent outline-none focus:border-[#0284C7] focus:bg-white text-gray-700"
                >
                  <option value="All">Cualquier Presupuesto</option>
                  <option value="0-300000">Hasta $300,000</option>
                  <option value="300000-500000">$300,000 - $500,000</option>
                  <option value="500000-1000000">$500,000 - $1,000,000</option>
                  <option value="1000000-999999999">Más de $1,000,000</option>
                </select>

                <Link href="#properties" className="flex items-center justify-center rounded-xl bg-[#0284C7] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#0369A1]">
                  BUSCAR
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

         



{/* PROYECTOS DE INVERSIÓN */}
<section id="projects" className="scroll-mt-24 bg-[#E2E8F0] px-6 pt-12 pb-24 md:pt-16 md:pb-28">
  <div className="mx-auto max-w-6xl">

    <div className="mb-14 text-center">
      <p className="mb-4 text-base font-bold tracking-[0.2em] text-[#0284C7]">
        OPORTUNIDADES INMOBILIARIAS
      </p>

      <h2 className="text-4xl font-bold text-[#1E293B] md:text-5xl">
        Proyectos de Inversión
      </h2>

      <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-gray-600 md:text-xl">
        Descubre desarrollos inmobiliarios destacados en Miami y otras zonas de Florida.
        Explora sus características y encuentra una oportunidad alineada con tus objetivos.
      </p>
    </div>

    <div className="mx-auto grid max-w-md gap-8 md:max-w-none md:grid-cols-2 lg:grid-cols-3">

      {/* OKAN TOWER */}
      <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        <Link href="/proyectos/okan-tower" className="block">
          <div className="relative h-[420px] overflow-hidden">

            <img
              src="/proyectos/okan-tower/fachada.jpg"
              alt="Okan Tower, Downtown Miami"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            {/* DEGRADADO */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/80 via-[#07101F]/10 to-[#07101F]/20 transition-opacity duration-500 group-hover:opacity-0" />

            {/* UBICACIÓN */}
            <span className="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-5 py-3 text-sm font-bold tracking-wide text-[#0284C7] shadow-lg transition-opacity duration-300 group-hover:opacity-0">
              DOWNTOWN MIAMI
            </span>

            {/* LOGOTIPO Y FIRMA YADIRA */}
            <div className="absolute inset-0 flex items-center justify-center px-8 pb-4 transition-all duration-500 group-hover:scale-90 group-hover:opacity-0">

              <img
                src="/proyectos/logos/okan-logo.webp"
                alt="Logotipo Okan Tower"
                className="max-h-36 w-full max-w-[260px] object-contain brightness-0 invert drop-shadow-lg"
              />

              {/* FIRMA EN LA PARTE INFERIOR */}
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-sm font-semibold tracking-[0.16em] text-white drop-shadow-md">
                  YADIRA PORTUONDO
                </p>
                <p className="mt-1 text-[9px] font-medium tracking-[0.25em] text-white/90 drop-shadow-md">
                  REALTOR® | SOUTH FLORIDA
                </p>
              </div>
            </div>

            {/* INFORMACIÓN AL PASAR EL CURSOR */}
            <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-b from-[#07101F]/95 via-[#17263D]/95 to-[#07101F]/95 p-7 text-center opacity-100 transition-all duration-500 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">

              <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#C8A96B]">
                PROYECTO DESTACADO
              </p>

              <h3 className="mb-5 text-3xl font-bold text-white">
                Okan Tower
              </h3>

              <p className="mb-8 text-base leading-relaxed text-gray-200">
                Un desarrollo de uso mixto en el corazón de Downtown Miami,
                con residencias, espacios hoteleros y amenidades de alto nivel.
              </p>

              <span className="inline-flex items-center justify-center rounded-xl bg-[#0284C7] px-6 py-4 text-sm font-bold tracking-wide text-white transition hover:bg-[#0369A1]">
                CONOCER PROYECTO
              </span>
            </div>
          </div>
        </Link>
      </article>

      {/* 72 PARK */}
      <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        <Link href="/proyectos/72-park" className="block">
          <div className="relative h-[420px] overflow-hidden">

            <img
              src="/proyectos/72-park/fachada.jpg"
              alt="72 Park, Miami Beach"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            {/* DEGRADADO */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/80 via-[#07101F]/10 to-[#07101F]/20 transition-opacity duration-500 group-hover:opacity-0" />

            {/* UBICACIÓN */}
            <span className="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-5 py-3 text-sm font-bold tracking-wide text-[#0284C7] shadow-lg transition-opacity duration-300 group-hover:opacity-0">
              MIAMI BEACH
            </span>

            {/* LOGOTIPO Y FIRMA YADIRA */}
            <div className="absolute inset-0 flex items-center justify-center px-8 pb-4 transition-all duration-500 group-hover:scale-90 group-hover:opacity-0">

              <img
                src="/proyectos/logos/72-park-logo.svg"
                alt="Logotipo 72 Park Miami Beach"
                className="max-h-36 w-full max-w-[280px] object-contain brightness-0 invert drop-shadow-lg"
              />

              {/* FIRMA EN LA PARTE INFERIOR */}
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-sm font-semibold tracking-[0.16em] text-white drop-shadow-md">
                  YADIRA PORTUONDO
                </p>
                <p className="mt-1 text-[9px] font-medium tracking-[0.25em] text-white/90 drop-shadow-md">
                  REALTOR® | SOUTH FLORIDA
                </p>
              </div>
            </div>

            {/* INFORMACIÓN AL PASAR EL CURSOR */}
            <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-b from-[#07101F]/95 via-[#17263D]/95 to-[#07101F]/95 p-7 text-center opacity-100 transition-all duration-500 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">

              <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#C8A96B]">
                PROYECTO DESTACADO
              </p>

              <h3 className="mb-5 text-3xl font-bold text-white">
                72 Park
              </h3>

              <p className="mb-8 text-base leading-relaxed text-gray-200">
                Un proyecto residencial contemporáneo en Miami Beach,
                con arquitectura moderna, espacios de bienestar y
                amenidades diseñadas para disfrutar.
              </p>

              <span className="inline-flex items-center justify-center rounded-xl bg-[#0284C7] px-6 py-4 text-sm font-bold tracking-wide text-white transition hover:bg-[#0369A1]">
                CONOCER PROYECTO
              </span>
            </div>
          </div>
        </Link>
      </article>

      {/* NATIIVO FORT LAUDERDALE */}
      <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        <Link href="/proyectos/natiivo-fort-lauderdale" className="block">
          <div className="relative h-[420px] overflow-hidden">

            <img
              src="/proyectos/natiivo-fort-lauderdale/fachada.jpg"
              alt="Natiivo Fort Lauderdale"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            {/* DEGRADADO */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/80 via-[#07101F]/10 to-[#07101F]/20 transition-opacity duration-500 group-hover:opacity-0" />

            {/* UBICACIÓN */}
            <span className="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-5 py-3 text-sm font-bold tracking-wide text-[#0284C7] shadow-lg transition-opacity duration-300 group-hover:opacity-0">
              FORT LAUDERDALE
            </span>

            {/* LOGOTIPO Y FIRMA YADIRA */}
            <div className="absolute inset-0 flex items-center justify-center px-8 pb-4 transition-all duration-500 group-hover:scale-90 group-hover:opacity-0">

              <img
                src="/proyectos/logos/natiivo-logo.png"
                alt="Logotipo Natiivo Fort Lauderdale"
                className="max-h-36 w-full max-w-[280px] object-contain brightness-0 invert drop-shadow-lg"
              />

              {/* FIRMA EN LA PARTE INFERIOR */}
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-sm font-semibold tracking-[0.16em] text-white drop-shadow-md">
                  YADIRA PORTUONDO
                </p>
                <p className="mt-1 text-[9px] font-medium tracking-[0.25em] text-white/90 drop-shadow-md">
                  REALTOR® | SOUTH FLORIDA
                </p>
              </div>
            </div>

            {/* INFORMACIÓN AL PASAR EL CURSOR */}
            <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-b from-[#07101F]/95 via-[#17263D]/95 to-[#07101F]/95 p-7 text-center opacity-100 transition-all duration-500 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">

              <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#C8A96B]">
                PROYECTO DESTACADO
              </p>

              <h3 className="mb-5 text-3xl font-bold text-white">
                Natiivo Fort Lauderdale
              </h3>

              <p className="mb-8 text-base leading-relaxed text-gray-200">
                Una propuesta residencial de concepto contemporáneo que integra
                diseño, hospitalidad y espacios pensados para disfrutar de la
                vida urbana en el sur de Florida.
              </p>

              <span className="inline-flex items-center justify-center rounded-xl bg-[#0284C7] px-6 py-4 text-sm font-bold tracking-wide text-white transition hover:bg-[#0369A1]">
                CONOCER PROYECTO
              </span>
            </div>
          </div>
        </Link>
      </article>

    </div>
  </div>
</section>


      {/* SECCIÓN DE GUÍAS - Ubicada entre Propiedades y Nosotros */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold text-[#1E293B] md:text-4xl leading-tight">
              ¿ESTÁS LISTO PARA COMPRAR O VENDER TU PROPIEDAD?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Obtén ahora nuestras guías gratuitas para compradores y vendedores.
            </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Botón Compradores - Forzamos el color base */}
            <Link 
              href="/guia-comprador" 
              className="px-8 py-4 !bg-white border-2 border-[#0284C7] text-[#0284C7] font-bold rounded-xl hover:!bg-[#0284C7] hover:text-white transition duration-300 shadow-sm text-center transform hover:scale-105"
              style={{ boxShadow: 'none' }} // Esto elimina cualquier sombra residual
            >
              Descargar guía compradores
            </Link>
            
            {/* Botón Vendedores - Forzamos fondo blanco y borde */}
            <Link 
              href="/guia-vendedores" 
              className="px-8 py-4 !bg-white border-2 border-[#0284C7] text-[#0284C7] font-bold rounded-xl hover:!bg-[#0284C7] hover:text-white transition duration-300 shadow-sm text-center transform hover:scale-105"
            >
              Descargar guía vendedores
            </Link>
          </div>
          </motion.div>

          {/* CONTENEDOR DE LA IMAGEN - AJUSTADO PARA MAYOR TAMAÑO */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="flex justify-center items-center py-4"
          >
            {/* Cambiamos max-w-lg por max-w-xl para más tamaño */}
            <div className="relative w-full max-w-xl transition-transform duration-500 hover:scale-105">
              <img 
                src="/guias-ebook.png" 
                alt="Guías inmobiliarias en dispositivos móviles" 
                className="w-full h-auto drop-shadow-2xl" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img
              src="/yadira-professional.png"
              alt="Yadira Portuondo - Asesora de Bienes Raíces"
              className="rounded-3xl w-full object-cover shadow-2xl"
              loading="lazy"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#E0F2FE] px-4 py-1.5 text-sm font-bold text-[#0284C7]">
              <Star size={16} fill="currentColor" /> Conoce a tu asesora
            </div>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-[#1E293B] md:text-4xl">
              Más que vender casas, ayudo a construir hogares y futuros.
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                Soy Yadira Portuondo, tu aliada en el mercado inmobiliario de Miami. Mi objetivo es hacer que el proceso de comprar, vender o rentar sea sencillo, claro y sin estrés para ti y tu familia.
              </p>
              <p>
                Conozco las mejores zonas escolares, los vecindarios más seguros y las oportunidades de inversión más sólidas. Te ofrezco una atención cálida, en tu idioma, y enfocada 100% en tus necesidades.
              </p>
            </div>
            <div className="mt-8">
              <a href="https://wa.me/13056290218" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#0284C7] px-8 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-[#0369A1] hover:shadow-lg">
                Hablemos por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE YADIRA */}
      <section className="bg-[#1E293B] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">¿Por qué elegir mis servicios?</h2>
            <p className="mt-4 text-gray-300 text-lg">Un enfoque profesional y humano para cuidar tu patrimonio.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Asesoría Completa", desc: "Te guío desde la pre-aprobación del crédito hasta el día que recibes tus llaves." },
              { title: "Conocimiento Local", desc: "Vivo y respiro Miami. Te ayudaré a encontrar la zona perfecta para tu estilo de vida." },
              { title: "Negociación a tu Favor", desc: "Lucho por conseguirte el mejor trato posible, protegiendo siempre tus intereses económicos." }
            ].map((card, idx) => (
              <div key={idx} className="rounded-2xl bg-[#334155] p-8 transition duration-300 hover:-translate-y-1 hover:bg-[#475569] shadow-lg">
                <CheckCircle className="mb-5 h-10 w-10 text-[#38BDF8]" />
                <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#E2E8F0] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">Familias Felices</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { name: "Familia Martinez", role: "Compradores Primera Casa", review: "Yadira tuvo muchísima paciencia con nosotros. Nos explicó todo el proceso para primeros compradores y nos ayudó a conseguir la casa de nuestros sueños." },
              { name: "Daniel Thompson", role: "Vendedor", review: "Vendimos nuestra casa muy rápido y a excelente precio. Sus consejos sobre cómo arreglar la casa para las fotos fueron clave." },
              { name: "Isabella Cruz", role: "Inversionista", review: "Muy profesional y directa. Me ayudó a encontrar un apartamento con buen retorno de renta en una excelente zona." }
            ].map((testimonial, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-8 shadow-md border border-gray-100">
                <div className="mb-4 flex gap-1 text-[#F59E0B]">
                  <Star size={20} fill="currentColor"/><Star size={20} fill="currentColor"/><Star size={20} fill="currentColor"/><Star size={20} fill="currentColor"/><Star size={20} fill="currentColor"/>
                </div>
                <p className="mb-6 text-gray-600 leading-relaxed text-base">"{testimonial.review}"</p>
                <div>
                  <p className="font-bold text-[#1E293B]">{testimonial.name}</p>
                  <p className="text-sm font-medium text-[#0284C7]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM SECTION */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <InstagramIcon className="mx-auto mb-4 h-10 w-10 text-[#0284C7]" />
            <h2 className="text-3xl font-bold text-[#1E293B]">Síguenos en Redes Sociales</h2>
            <p className="mt-3 text-gray-600">Tips, nuevas propiedades y el día a día del mercado inmobiliario.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <a key={num} href="https://www.instagram.com/yadiraportuondorealtor/" target="_blank" rel="noreferrer" className="group relative block overflow-hidden rounded-2xl aspect-square bg-gray-100 shadow-sm">
                <img src={`/instagram${num}.png`} alt={`Publicación Instagram ${num}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-[#0284C7]/60 opacity-0 transition duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <span className="text-white font-bold tracking-wide">VER POST</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-[#E2E8F0] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold text-[#1E293B] md:text-4xl">¿Listo para empezar?</h2>
            <p className="mb-10 text-lg text-gray-600">
              Escríbeme sin compromiso. Me encantaría escuchar qué estás buscando y explicarte cómo puedo ayudarte a lograrlo.
            </p>
            <div className="space-y-6 text-base font-medium text-[#1E293B]">
              <a href="#" className="flex items-center gap-4 hover:text-[#0284C7]">
                <div className="bg-white p-3 rounded-full shadow-sm"><MapPin size={24} className="text-[#0284C7]" /></div>
                Miami, Florida
              </a>
              <a href="tel:+13056290218" className="flex items-center gap-4 hover:text-[#0284C7]">
                <div className="bg-white p-3 rounded-full shadow-sm"><Phone size={24} className="text-[#0284C7]" /></div>
                +1 (305) 629-0218
              </a>
              <a href="mailto:info@yadiraportuondo.com" className="flex items-center gap-4 hover:text-[#0284C7]">
                <div className="bg-white p-3 rounded-full shadow-sm"><Mail size={24} className="text-[#0284C7]" /></div>
                info@yadiraportuondo.com
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100">
            <form className="space-y-5" onSubmit={(e) => {
                e.preventDefault();
                setIsSending(true);
                const msg = `Hola Yadira.\nMi nombre es: ${name}\nEmail: ${email}\nTel: ${phone}\n\nEstoy interesado en:\n${message}`;
                window.open(`https://wa.me/13056290218?text=${encodeURIComponent(msg)}`, "_blank");
                setTimeout(() => setIsSending(false), 2000); // Restablece el botón después de 2 segundos
              }}>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-2">Envía un mensaje</h3>
              <p className="text-gray-500 text-sm mb-6">Completa tus datos y te responderé lo antes posible.</p>
              
              <input
                type="text"
                placeholder="Nombre Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl bg-gray-50 px-4 py-3.5 text-gray-800 outline-none border border-gray-200 focus:border-[#0284C7] focus:bg-white transition"
              />
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl bg-gray-50 px-4 py-3.5 text-gray-800 outline-none border border-gray-200 focus:border-[#0284C7] focus:bg-white transition"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl bg-gray-50 px-4 py-3.5 text-gray-800 outline-none border border-gray-200 focus:border-[#0284C7] focus:bg-white transition"
                />
              </div>
              <textarea
                placeholder="Cuéntame, ¿Buscas comprar, vender o rentar?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                className="w-full resize-none rounded-xl bg-gray-50 px-4 py-3.5 text-gray-800 outline-none border border-gray-200 focus:border-[#0284C7] focus:bg-white transition"
              />
              <button 
                type="submit" 
                disabled={isSending}
                className="w-full rounded-xl bg-[#0284C7] px-6 py-4 text-base font-bold text-white transition hover:bg-[#0369A1] shadow-md hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSending ? "ENVIANDO..." : "ENVIAR MENSAJE"}
              </button>
            </form>
          </div>
        </div>
      </section>




{/* FOOTER */}
<footer className="bg-[#0B1220] px-6 pt-10 text-gray-300">
  {/* CONTENIDO PRINCIPAL */}
  <div className="mx-auto max-w-6xl">
    <div className="grid grid-cols-1 items-start gap-10 pb-9 md:grid-cols-[1.25fr_0.75fr_1fr] md:gap-12 lg:gap-16">

      {/* MARCA PERSONAL */}
      <div className="min-w-0">
        <Link href="#home" className="mb-4 inline-flex items-center gap-3">
          <HomeIcon className="h-7 w-7 shrink-0 text-[#38BDF8]" />
          <span className="text-2xl font-bold tracking-tight text-white">
            YADIRA PORTUONDO
          </span>
        </Link>

        <p className="mb-5 max-w-sm text-sm leading-7 text-gray-400">
          Asesoría inmobiliaria profesional, transparente y personalizada
          para acompañarte en tus decisiones inmobiliarias en Miami y el
          Sur de Florida.
        </p>

        <div className="flex gap-3">
          <a
            href="https://www.instagram.com/yadiraportuondorealtor/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-[#C8A96B] hover:text-[#C8A96B]"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>

          <a
            href="https://wa.me/13056290218"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:border-[#C8A96B] hover:text-[#C8A96B]"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>

      {/* NAVEGACIÓN */}
      <div className="md:pl-2">
        <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#C8A96B]">
          Explora
        </h4>

        <ul className="space-y-3 text-sm text-gray-400">
          <li><Link href="#home" className="transition hover:text-white">Inicio</Link></li>
          <li><Link href="#properties" className="transition hover:text-white">Propiedades</Link></li>
          <li><Link href="#projects" className="transition hover:text-white">Proyectos de inversión</Link></li>
          <li><Link href="#about" className="transition hover:text-white">Sobre mí</Link></li>
          <li><Link href="#contact" className="transition hover:text-white">Contacto</Link></li>
        </ul>
      </div>

      
{/* CONTACTO */}
<div className="md:pl-2 md:text-right">
  <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#C8A96B]">
    Contacto
  </h4>

  <p className="mb-2 text-sm text-gray-400">
    Atención personalizada
  </p>

  <a
    href="https://wa.me/13056290218"
    target="_blank"
    rel="noreferrer"
    className="text-xl font-semibold text-white transition hover:text-[#C8A96B]"
  >
    +1 (305) 629-0218
  </a>

  <p className="mt-5 text-sm leading-6 text-gray-400">
    Miami y Sur de Florida
  </p>
</div>

    </div>
  </div>

  {/* BROKERAGE - FRANJA DE CONTRASTE */}
  <div className="-mx-6 bg-[#17263D] px-6">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 py-6 sm:flex-row">

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C8A96B]">
          Brokerage
        </p>

        <p className="mt-2 text-lg font-semibold text-white">
          Universal Realty Group
        </p>

        <p className="mt-1 text-sm text-gray-300">
          Firma de corretaje inmobiliario
        </p>
      </div>

      <div className="flex h-20 w-64 items-center justify-center overflow-hidden translate-x-12 bg-transparent">
  <img
    src="/universal-realty-group.png"
    alt="Universal Realty Group"
    className="h-full w-full scale-[2.3] object-contain mix-blend-screen"
  />
</div>
    </div>
  </div>

  {/* COPYRIGHT */}
  <div className="border-t border-gray-800">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 py-5 text-center text-xs text-gray-500 sm:flex-row sm:text-left">
      <p>
        © {new Date().getFullYear()} Yadira Portuondo. Todos los derechos reservados.
      </p>

      <p>Miami, Florida · Real Estate</p>
    </div>
  </div>
</footer>




      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/13056290218"
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle size={28} />
      </a>
    </main>
  );
}