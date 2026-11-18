
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
  BriefcaseBusiness,
  Palmtree,
  Utensils,
  Baby,
  Umbrella,
} from "lucide-react";

const whatsapp =
  "https://wa.me/13056290218?text=" +
  encodeURIComponent(
    "Hola Yadira, estoy interesado en conocer más información sobre 72 Park Miami Beach."
  );

const features = [
  {
    icon: Waves,
    title: "Piscina estilo resort",
    description:
      "Piscina de aproximadamente 150 pies, cabañas y espacios exteriores para disfrutar del ambiente de Miami Beach.",
  },
  {
    icon: Dumbbell,
    title: "Bienestar y fitness",
    description:
      "Gimnasio equipado con tecnología Technogym, yoga lounge y espacios destinados al bienestar.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Coworking",
    description:
      "Espacio de trabajo disponible las 24 horas, con cabinas privadas y conectividad de alta velocidad.",
  },
  {
    icon: Palmtree,
    title: "Experiencia de playa",
    description:
      "Servicio de playa con sillas, toallas y transporte mediante carrito de golf, sujeto a condiciones del servicio.",
  },
  {
    icon: Sparkles,
    title: "Rooftop privado",
    description:
      "Terraza exclusiva para residentes con áreas de descanso y vistas panorámicas.",
  },
  {
    icon: Utensils,
    title: "Gastronomía y encuentros",
    description:
      "Restaurante, bar y lounge con espacios interiores y exteriores para compartir.",
  },
  {
    icon: Baby,
    title: "Espacios familiares",
    description:
      "Kids' Club con áreas de juego y actividades para los más pequeños.",
  },
  {
    icon: Umbrella,
    title: "Estilo de vida",
    description:
      "Áreas sociales, jardines y espacios al aire libre que complementan la experiencia residencial.",
  },
];

const navigation = [
  { name: "INICIO", link: "/#home" },
  { name: "PROPIEDADES", link: "/#projects" },
  { name: "NOSOTROS", link: "/#about" },
  { name: "CONTACTO", link: "/#contact" },
];

const sectionLabel =
  "mb-5 text-sm font-medium uppercase tracking-[0.4em] text-[#C8A96B]";

const sectionTitle =
  "text-4xl font-light leading-tight tracking-tight text-[#252944] md:text-5xl";

const bodyText =
  "text-base leading-relaxed text-[#65717A] md:text-lg";

const gallery = [
  {
    image: "/proyectos/72-park/piscina.jpg",
    alt: "Piscina de 72 Park Miami Beach",
    title: "Piscina estilo resort",
    className: "h-[340px] md:h-[480px]",
  },
  {
    image: "/proyectos/72-park/terraza.jpg",
    alt: "Terraza de 72 Park",
    title: "Espacios exteriores",
    className: "h-[210px] md:h-[227px]",
  },
  {
    image: "/proyectos/72-park/gym.webp",
    alt: "Gimnasio de 72 Park",
    title: "Bienestar y fitness",
    className: "h-[210px] md:h-[227px]",
  },
  {
    image: "/proyectos/72-park/lobby.jpg",
    alt: "Lobby de 72 Park",
    title: "Lobby contemporáneo",
    className: "h-[280px] md:h-[340px]",
  },
  {
    image: "/proyectos/72-park/cocina.jpg",
    alt: "Cocina de una residencia de 72 Park",
    title: "Diseño interior",
    className: "h-[280px] md:h-[340px]",
  },
];

export default function Park72Page() {
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
          {/* IDENTIDAD DE MARCA */}
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

          {/* BOTÓN DE CONTACTO */}
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

        {/* DESPLEGABLE MÓVIL */}
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
          src="/proyectos/72-park/fachada.jpg"
          alt="Arquitectura de 72 Park Miami Beach"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07101F]/90 via-[#07101F]/55 to-[#07101F]/10" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-between px-6 pb-12 pt-40">
          <Link
            href="/#projects"
            className="inline-flex w-fit items-center gap-2 text-sm text-white/90 transition hover:text-[#C8A96B]"
          >
            <ArrowLeft size={18} />
            Volver a proyectos
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl pb-12"
          >
            <p className={sectionLabel}>
              PROYECTOS DE INVERSIÓN · MIAMI BEACH
            </p>

            <h1 className="mb-7 text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
              72
              <span className="block font-semibold">PARK</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              Un estilo de vida contemporáneo junto al océano, donde el diseño,
              la flexibilidad y la experiencia de Miami Beach se encuentran.
            </p>

            <div className="mb-9 flex items-center gap-3 text-sm text-white/90">
              <MapPin size={19} className="text-[#C8A96B]" />
              Miami Beach, Florida
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
            <p className={sectionLabel}>UNA NUEVA EXPERIENCIA</p>

            <h2 className={`mb-7 ${sectionTitle}`}>
              Miami Beach, desde una nueva perspectiva.
            </h2>

            <p className={`${bodyText} mb-5`}>
              72 Park es un desarrollo residencial de 22 pisos ubicado en el
              sector de North Beach, Miami Beach. Su propuesta combina
              arquitectura contemporánea, espacios abiertos y vistas hacia el
              océano Atlántico, los parques y el horizonte de Miami.
            </p>

            <p className={bodyText}>
              El proyecto ofrece residencias tipo Jr. 1, una, dos y tres
              habitaciones, con opciones de mobiliario y una propuesta
              orientada a quienes buscan vivir, disfrutar o evaluar
              oportunidades inmobiliarias en el sur de Florida.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#E5E7EB] bg-[#F7F8FA] p-5">
                <p className="text-3xl font-light text-[#252944]">22</p>
                <p className="mt-1 text-xs font-semibold tracking-widest text-[#65717A]">
                  PISOS
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E7EB] bg-[#F7F8FA] p-5">
                <p className="text-3xl font-light text-[#252944]">64.000+</p>
                <p className="mt-1 text-xs font-semibold tracking-widest text-[#65717A]">
                  PIES² DE AMENIDADES
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-4 rounded-2xl border border-[#E5E7EB] bg-[#F7F8FA] p-5">
              <MapPin className="mt-1 shrink-0 text-[#C8A96B]" />

              <div>
                <p className="font-semibold text-[#252944]">
                  580 72nd Street
                </p>
                <p className="text-sm text-[#65717A]">
                  Miami Beach, FL 33141
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/proyectos/72-park/terraza.jpg"
              alt="Terraza de 72 Park"
              className="h-[480px] w-full rounded-[32px] object-cover shadow-xl"
            />

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-[#C8A96B] p-7 shadow-lg md:block">
              <p className="text-4xl font-light text-[#07101F]">150</p>
              <p className="mt-1 text-xs font-semibold tracking-widest text-[#07101F]">
                PIES DE PISCINA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="bg-[#F7F8FA] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className={sectionLabel}>DESCUBRE 72 PARK</p>

              <h2 className={sectionTitle}>
                Una experiencia en cada espacio.
              </h2>
            </div>

            <p className="max-w-md text-base leading-relaxed text-[#65717A]">
              Arquitectura, diseño y espacios concebidos para disfrutar del
              estilo de vida de Miami Beach.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {gallery.slice(0, 1).map((item) => (
              <motion.div
                key={item.image}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-[32px] shadow-md ${item.className}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/75 via-transparent to-transparent" />

                <p className="absolute bottom-7 left-7 text-xl font-medium text-white">
                  {item.title}
                </p>
              </motion.div>
            ))}

            <div className="grid gap-6">
              {gallery.slice(1, 3).map((item) => (
                <motion.div
                  key={item.image}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-[32px] shadow-md ${item.className}`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/75 via-transparent to-transparent" />

                  <p className="absolute bottom-6 left-6 text-lg font-medium text-white">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {gallery.slice(3).map((item) => (
              <motion.div
                key={item.image}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-[32px] shadow-md ${item.className}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07101F]/75 via-transparent to-transparent" />

                <p className="absolute bottom-6 left-6 text-lg font-medium text-white">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENIDADES */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className={sectionLabel}>ESTILO DE VIDA</p>

            <h2 className={sectionTitle}>
              Espacios para disfrutar cada momento.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* RESIDENCIAS */}
      <section className="bg-[#F7F8FA] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className={sectionLabel}>RESIDENCIAS</p>

            <h2 className={`mb-7 ${sectionTitle}`}>
              Tu espacio, tu estilo de vida.
            </h2>

            <p className={`${bodyText} mb-5`}>
              72 Park presenta distribuciones desde Jr. 1 hasta tres
              habitaciones, con superficies aproximadas entre 470 y 1.177 pies
              cuadrados, de acuerdo con la información del proyecto.
            </p>

            <p className={bodyText}>
              Las residencias cuentan con diseños abiertos, balcones privados,
              ventanales de piso a techo y opciones de mobiliario. Las
              características específicas varían según la unidad.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Opciones de Jr. 1, 1, 2 y 3 habitaciones",
                "Balcones privados",
                "Ventanales de piso a techo",
                "Vistas hacia el océano, parques y ciudad",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#C8A96B]" />
                  <span className="text-base text-[#46535D]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/proyectos/72-park/cocina.jpg"
              alt="Diseño interior de una residencia en 72 Park"
              className="h-[480px] w-full rounded-[32px] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className={sectionLabel}>UBICACIÓN ESTRATÉGICA</p>

            <h2 className={`mb-7 ${sectionTitle}`}>
              En el entorno de North Beach.
            </h2>

            <p className={`${bodyText} mb-8`}>
              72 Park se encuentra en Miami Beach, en un entorno que conecta
              la vida residencial con la playa, los parques y diferentes
              espacios de recreación y gastronomía.
            </p>

            <ul className="space-y-4">
              {[
                "Ubicación en el sector de North Beach",
                "Cercanía a la playa",
                "Entorno de parques y espacios al aire libre",
                "Acceso a restaurantes y comercios",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#C8A96B]" />
                  <span className="text-base text-[#46535D]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex items-start gap-4 rounded-2xl border border-[#E5E7EB] bg-[#F7F8FA] p-5">
              <MapPin className="mt-1 shrink-0 text-[#C8A96B]" />

              <div>
                <p className="font-semibold text-[#252944]">
                  580 72nd Street
                </p>
                <p className="text-sm text-[#65717A]">
                  Miami Beach, Florida 33141
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-[#E5E7EB] shadow-lg">
            <iframe
              title="Ubicación de 72 Park Miami Beach"
              src="https://www.google.com/maps?q=580+72nd+Street,+Miami+Beach,+FL+33141&output=embed"
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
            Conoce más sobre 72 Park.
          </h2>

          <p className="mb-10 text-base leading-relaxed text-white/75 md:text-lg">
            Solicita información sobre las residencias, características,
            disponibilidad y precios vigentes. Te acompañaré durante el
            proceso para que puedas evaluar esta oportunidad inmobiliaria.
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
            La disponibilidad, los precios, las características y las
            condiciones están sujetos a confirmación. Las imágenes pueden
            corresponder a representaciones del proyecto.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#07101F] px-6 py-10 text-center text-sm text-white/60">
        <p className="mb-2 tracking-wide text-[#C8A96B]">
          YADIRA PORTUONDO · REALTOR® MIAMI
        </p>

        <p>
          © {new Date().getFullYear()} Yadira Portuondo Realtor. Todos los
          derechos reservados.
        </p>

        <div className="mt-4">
          <Link
            href="/"
            className="transition hover:text-[#C8A96B]"
          >
            Volver a la página principal
          </Link>
        </div>
      </footer>
    </main>
  );
}
