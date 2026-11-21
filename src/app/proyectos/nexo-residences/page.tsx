
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Building2,
  Waves,
  Dumbbell,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  Menu,
  X,
  Home,
  Camera as InstagramIcon,
  BriefcaseBusiness,
  Trees,
} from "lucide-react";

const whatsapp =
  "https://wa.me/13056290218?text=" +
  encodeURIComponent(
    "Hola Yadira, estoy interesado en conocer más información sobre NEXO Residences en North Miami Beach."
  );

const features = [
  {
    icon: Building2,
    title: "Residencias amuebladas",
    description:
      "Un concepto residencial contemporáneo con estudios y unidades de diferentes configuraciones, diseñadas para vivir, disfrutar y alojar.",
  },
  {
    icon: Waves,
    title: "Piscina estilo resort",
    description:
      "Terraza de piscina con solárium, espacios de descanso, áreas exteriores y ambientes para disfrutar del clima de Miami.",
  },
  {
    icon: Dumbbell,
    title: "Bienestar y fitness",
    description:
      "Gimnasio interior y exterior, estudio de yoga y espacios concebidos para integrar actividad física y bienestar.",
  },
  {
    icon: Sparkles,
    title: "Rooftop observatorio",
    description:
      "Terraza panorámica con espacios lounge, comedor exterior y áreas de descanso para disfrutar del entorno.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Centro de negocios",
    description:
      "Espacios de coworking, estaciones de trabajo y áreas de encuentro para combinar productividad y estilo de vida.",
  },
  {
    icon: Trees,
    title: "Espacios al aire libre",
    description:
      "Áreas verdes, zona de hamacas, cine al aire libre y espacios sociales integrados con el paisaje tropical.",
  },
];

const navigation = [
  { name: "INICIO", link: "/#home" },
  { name: "PROPIEDADES", link: "/#properties" },
  { name: "NOSOTROS", link: "/#about" },
  { name: "CONTACTO", link: "/#contact" },
];

const sectionLabel =
  "mb-5 text-sm font-medium uppercase tracking-[0.4em] text-[#C8A96B]";

const sectionTitle =
  "text-4xl font-light leading-tight tracking-tight text-[#252944] md:text-5xl";

const bodyText =
  "text-base leading-relaxed text-[#65717A] md:text-lg";

export default function NexoResidencesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerText = scrolled ? "text-[#252944]" : "text-white";

  const headerBackground = scrolled
    ? "border-b border-[#E5E7EB] bg-white shadow-md"
    : "border-b border-white/10 bg-[#07101F]/20";

  return (
    <main className="min-h-screen bg-[#F7F8FA] font-sans text-[#252944]">

      {/* ENCABEZADO PRINCIPAL */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${headerBackground}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link
            href="/"
            aria-label="Inicio Yadira Portuondo"
            className={`flex items-center gap-3 ${headerText}`}
          >
            <Home
              size={31}
              strokeWidth={2}
              className={`shrink-0 ${
                scrolled ? "text-[#0284C7]" : "text-white"
              }`}
            />

            <span className="flex flex-col">
              <span className="text-xl font-bold leading-tight tracking-tight sm:text-2xl">
                YADIRA PORTUONDO
              </span>

              <span
                className={`mt-1 text-xs font-medium ${
                  scrolled ? "text-[#64748B]" : "text-white/85"
                }`}
              >
                REALTOR® MIAMI
              </span>
            </span>
          </Link>

          {/* MENÚ DE ESCRITORIO */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Navegación principal"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={`text-sm font-semibold transition-colors duration-300 hover:text-[#0284C7] ${headerText}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contact"
            className={`hidden rounded-full px-7 py-3 text-sm font-bold shadow-md transition-all duration-300 hover:scale-105 lg:block ${
              scrolled
                ? "bg-[#0284C7] text-white hover:bg-[#0369A1]"
                : "bg-white text-[#0284C7] hover:bg-[#F1F5F9]"
            }`}
          >
            CONTÁCTANOS
          </Link>

          {/* MENÚ MÓVIL */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden ${
              scrolled ? "text-[#252944]" : "text-white"
            }`}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={29} /> : <Menu size={29} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-2 border-t border-[#E5E7EB] bg-white px-6 py-6 text-center shadow-xl lg:hidden">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#E5E7EB] py-4 text-sm font-semibold text-[#252944] transition hover:text-[#0284C7]"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-full bg-[#0284C7] px-6 py-3 text-sm font-bold text-white"
            >
              CONTÁCTANOS
            </Link>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <img
          src="/proyectos/nexo-residences/fachada.webp"
          alt="Vista exterior de NEXO Residences en North Miami Beach"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07101F]/90 via-[#07101F]/55 to-[#07101F]/10" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-between px-6 pb-12 pt-40">

          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 text-sm text-white/90 transition hover:text-[#C8A96B]"
          >
            <ArrowLeft size={18} />
            Volver al inicio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl pb-12"
          >
            <p className={sectionLabel}>
              RESIDENCIAS · NORTH MIAMI BEACH
            </p>

            <h1 className="mb-7 text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
              NEXO
              <span className="block font-semibold">RESIDENCES</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              Un concepto residencial contemporáneo que conecta diseño,
              comodidad y experiencias de vida en North Miami Beach.
            </p>

            <div className="mb-9 flex items-center gap-3 text-sm text-white/90">
              <MapPin size={19} className="text-[#C8A96B]" />
              North Miami Beach, Florida
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#C8A96B] px-8 py-4 text-sm font-medium tracking-wide text-[#07101F] transition-all duration-300 hover:scale-[1.03] hover:bg-white"
            >
              SOLICITAR INFORMACIÓN
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

          <div>
            <p className={sectionLabel}>
              UNA NUEVA FORMA DE VIVIR
            </p>

            <h2 className={`mb-7 ${sectionTitle}`}>
              Diseño, flexibilidad y conexión en un solo lugar.
            </h2>

            <p className={`${bodyText} mb-5`}>
              NEXO Residences es un desarrollo residencial ubicado sobre
              Biscayne Boulevard, en North Miami Beach. Su propuesta combina
              arquitectura contemporánea, residencias amuebladas y espacios
              comunes pensados para diferentes estilos de vida.
            </p>

            <p className={bodyText}>
              El proyecto contempla 254 residencias distribuidas en una
              torre de 16 pisos, con tipologías que incluyen estudios y
              unidades de varias habitaciones, además de espacios sociales,
              áreas de bienestar y servicios para sus residentes.
            </p>

            <div className="mt-9 flex items-start gap-4 rounded-2xl border border-[#E5E7EB] bg-[#F7F8FA] p-5">
              <MapPin className="mt-1 shrink-0 text-[#C8A96B]" />

              <div>
                <p className="font-semibold text-[#252944]">
                  13899 Biscayne Boulevard
                </p>

                <p className="text-sm text-[#65717A]">
                  North Miami Beach, FL 33181
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/proyectos/nexo-residences/sala.jpg"
              alt="Interior residencial de NEXO Residences"
              className="h-[480px] w-full rounded-[32px] object-cover shadow-xl"
            />

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-[#C8A96B] p-7 shadow-lg md:block">
              <p className="text-4xl font-light text-[#07101F]">
                254
              </p>

              <p className="mt-1 text-xs font-semibold tracking-widest text-[#07101F]">
                RESIDENCIAS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DATOS DEL PROYECTO */}
      <section className="bg-[#0D1526] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 text-center sm:grid-cols-3">

          <div>
            <p className="text-4xl font-light text-[#C8A96B] md:text-5xl">
              16
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/70">
              Pisos
            </p>
          </div>

          <div>
            <p className="text-4xl font-light text-[#C8A96B] md:text-5xl">
              254
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/70">
              Residencias
            </p>
          </div>

          <div>
            <p className="text-4xl font-light text-[#C8A96B] md:text-5xl">
              25.000+
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/70">
              Pies cuadrados de amenidades
            </p>
          </div>

        </div>
      </section>

      {/* GALERÍA */}
      <section className="bg-[#F7F8FA] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className={sectionLabel}>
                DESCUBRE NEXO RESIDENCES
              </p>

              <h2 className={sectionTitle}>
                Una experiencia en cada espacio.
              </h2>
            </div>

            <p className="max-w-md text-base leading-relaxed text-[#65717A]">
              Arquitectura, diseño y espacios concebidos para disfrutar
              de una experiencia residencial contemporánea.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-[340px] overflow-hidden rounded-[32px] shadow-md md:h-[480px]"
            >
              <img
                src="/proyectos/nexo-residences/piscina.jpg"
                alt="Piscina y terraza de NEXO Residences"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/75 via-transparent to-transparent" />

              <p className="absolute bottom-7 left-7 text-xl font-medium text-white">
                Piscina y espacios de descanso
              </p>
            </motion.div>

            <div className="grid gap-6">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative h-[210px] overflow-hidden rounded-[32px] shadow-md md:h-[227px]"
              >
                <img
                  src="/proyectos/nexo-residences/rooftop.jpg"
                  alt="Terraza observatorio de NEXO Residences"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/75 via-transparent to-transparent" />

                <p className="absolute bottom-6 left-6 text-lg font-medium text-white">
                  Rooftop y observatorio
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative h-[210px] overflow-hidden rounded-[32px] shadow-md md:h-[227px]"
              >
                <img
                  src="/proyectos/nexo-residences/gimnasio.jpg"
                  alt="Gimnasio de NEXO Residences"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/75 via-transparent to-transparent" />

                <p className="absolute bottom-6 left-6 text-lg font-medium text-white">
                  Bienestar y acondicionamiento físico
                </p>
              </motion.div>

            </div>
          </div>

          {/* GALERÍA COMPLEMENTARIA */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-[300px] overflow-hidden rounded-[32px] shadow-md"
            >
              <img
                src="/proyectos/nexo-residences/zona-social.png"
                alt="Zona de hamacas y descanso de NEXO Residences"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/75 via-transparent to-transparent" />

              <p className="absolute bottom-7 left-7 text-xl font-medium text-white">
                Zona social y espacios verdes
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-[300px] overflow-hidden rounded-[32px] shadow-md"
            >
              <img
                src="/proyectos/nexo-residences/sala.jpg"
                alt="Sala y comedor de una residencia NEXO"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/75 via-transparent to-transparent" />

              <p className="absolute bottom-7 left-7 text-xl font-medium text-white">
                Diseño interior residencial
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* AMENIDADES */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-2xl">
            <p className={sectionLabel}>
              ESTILO DE VIDA
            </p>

            <h2 className={sectionTitle}>
              Espacios para disfrutar cada momento.
            </h2>

            <p className={`${bodyText} mt-6`}>
              Más de 25.000 pies cuadrados de amenidades interiores y
              exteriores distribuidas en diferentes espacios del desarrollo.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-[28px] border border-[#E5E7EB] bg-[#F7F8FA] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C8A96B]/15">
                    <Icon className="h-7 w-7 text-[#A58C62]" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-[#252944]">
                    {feature.title}
                  </h3>

                  <p className="text-base leading-relaxed text-[#65717A]">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section className="bg-[#F7F8FA] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className={sectionLabel}>
              UBICACIÓN ESTRATÉGICA
            </p>

            <h2 className={`mb-7 ${sectionTitle}`}>
              Entre Aventura y Bal Harbour.
            </h2>

            <p className={`${bodyText} mb-8`}>
              NEXO Residences se encuentra sobre Biscayne Boulevard,
              en North Miami Beach, una ubicación que conecta con
              importantes zonas residenciales, comerciales y recreativas
              del sur de Florida.
            </p>

            <ul className="space-y-4">
              {[
                "Aproximadamente 5 minutos de Aventura Mall",
                "Cercanía a Bal Harbour",
                "Acceso a Oleta River State Park",
                "Conexión con las principales vías de Miami",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#C8A96B]" />

                  <span className="text-base text-[#46535D]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex items-start gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-5">
              <MapPin className="mt-1 shrink-0 text-[#C8A96B]" />

              <div>
                <p className="font-semibold text-[#252944]">
                  NEXO Residences
                </p>

                <p className="text-sm text-[#65717A]">
                  13899 Biscayne Boulevard
                </p>

                <p className="text-sm text-[#65717A]">
                  North Miami Beach, FL 33181
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-[#E5E7EB] shadow-lg">
            <iframe
              title="Ubicación de NEXO Residences"
              src="https://www.google.com/maps?q=13899+Biscayne+Boulevard,+North+Miami+Beach,+FL+33181&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              className="border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="bg-[#0D1526] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">

          <p className={sectionLabel}>
            HAGAMOS REALIDAD TU PRÓXIMA INVERSIÓN
          </p>

          <h2 className="mb-7 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl">
            Conoce más sobre NEXO Residences.
          </h2>

          <p className="mb-10 text-base leading-relaxed text-white/75 md:text-lg">
            Solicita información sobre tipologías, características,
            condiciones y disponibilidad vigente. Te acompañaré durante
            el proceso para que puedas evaluar esta alternativa inmobiliaria.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#C8A96B] px-9 py-4 text-sm font-medium tracking-wide text-[#07101F] transition-all duration-300 hover:scale-[1.03] hover:bg-white"
          >
            <MessageCircle size={19} />
            HABLAR CON YADIRA
          </a>

          <p className="mt-8 text-xs leading-relaxed text-white/45">
            Las características, precios, condiciones y disponibilidad
            están sujetos a confirmación por parte del desarrollador.
            Las imágenes son representaciones conceptuales del proyecto.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B1220] px-6 pt-10 text-gray-300">

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-start gap-10 pb-9 md:grid-cols-[1.25fr_0.75fr_1fr] md:gap-12 lg:gap-16">

            {/* MARCA */}
            <div className="min-w-0">
              <Link href="/" className="mb-4 inline-flex items-center gap-3">
                <Home className="h-7 w-7 shrink-0 text-[#38BDF8]" />

                <span className="text-2xl font-bold tracking-tight text-white">
                  YADIRA PORTUONDO
                </span>
              </Link>

              <p className="mb-5 max-w-sm text-sm leading-7 text-gray-400">
                Asesoría inmobiliaria profesional, transparente y personalizada
                para acompañarte en tus decisiones inmobiliarias en Miami y
                el Sur de Florida.
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
                <li><Link href="/#home" className="transition hover:text-white">Inicio</Link></li>
                <li><Link href="/#properties" className="transition hover:text-white">Propiedades</Link></li>
                <li><Link href="/#projects" className="transition hover:text-white">Proyectos de inversión</Link></li>
                <li><Link href="/#about" className="transition hover:text-white">Sobre mí</Link></li>
                <li><Link href="/#contact" className="transition hover:text-white">Contacto</Link></li>
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

        {/* BROKERAGE */}
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
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 py-5 text-center text-xs text-gray-500 sm:flex-row">
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
