"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Bed, Bath, Square, MapPin, Phone, Mail, CheckCircle2, User, Calendar, Image as ImageIcon } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 

function PropertyContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchProperty = async () => {
        const { data } = await supabase.from("properties").select("*").eq("id", id).single();
        if (data) setProperty(data);
        setLoading(false);
      };
      fetchProperty();
    }
  }, [id]);

  if (loading) return <div className="p-20 text-center">Cargando detalles profesionales...</div>;
  if (!property) return <div className="p-20 text-center">Propiedad no encontrada</div>;

  const gallery = property.images && Array.isArray(property.images) ? property.images : [property.image];

  return (
    <div className="bg-white min-h-screen"> 
      <Header /> 
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-2 mb-4">
          <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Miami Select</span>
          <span className="bg-gray-800 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Nueva Lista</span>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1E293B]">{property.title}</h1>
          <p className="text-gray-500 flex items-center gap-2 mt-2"><MapPin size={18}/> {property.location}</p>
        </div>

        {/* Galería Pro Dinámica con Botón Ver Todas */}
        <div className="relative group cursor-pointer" onClick={() => setOpen(true)}>
          <div className="grid md:grid-cols-3 gap-2 h-[500px] mb-10">
            <div className="md:col-span-2 h-full">
              <img src={gallery[0]} className="w-full h-full object-cover rounded-l-2xl hover:opacity-95 transition" />
            </div>
            <div className="hidden md:grid grid-rows-2 gap-2 h-full">
               <div className="bg-gray-200 rounded-r-2xl overflow-hidden">
                 <img src={gallery[1] || gallery[0]} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition" />
               </div>
               <div className="bg-gray-200 rounded-r-2xl overflow-hidden relative">
                 <img src={gallery[2] || gallery[0]} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition" />
                 {gallery.length > 3 && (
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-lg">
                     +{gallery.length - 3} fotos más
                   </div>
                 )}
               </div>
            </div>
          </div>
          
          {/* Botón flotante para ver todas las fotos */}
          <button className="absolute bottom-12 right-6 bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-lg font-bold shadow-lg flex items-center gap-2 hover:bg-white transition">
            <ImageIcon size={18} /> Ver todas ({gallery.length})
          </button>
        </div>

        {/* Visor de imágenes (Lightbox) */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={gallery.map((url: string) => ({ src: url }))}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            
            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 flex items-center justify-between">
               <div>
                  <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider">Precio de Lista</p>
                  <p className="text-4xl font-extrabold text-[#0284C7]">{property.price}</p>
               </div>
               <span className="bg-blue-50 text-[#0284C7] px-4 py-2 rounded-full font-semibold">{property.type}</span>
            </div>

            <div className="grid grid-cols-3 gap-8 py-4 border-b">
              <div className="flex items-center gap-2 text-gray-700 font-medium"><Bed className="text-[#0284C7]"/> {property.beds} Hab</div>
              <div className="flex items-center gap-2 text-gray-700 font-medium"><Bath className="text-[#0284C7]"/> {property.baths} Baños</div>
              <div className="flex items-center gap-2 text-gray-700 font-medium"><Square className="text-[#0284C7]"/> {property.Pies2} Pies²</div>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-[#1E293B]">Descripción</h2>
              <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">{property.description}</p>
            </section>

            <section className="py-6 border-t">
              <h3 className="text-xl font-bold mb-4 text-[#1E293B]">Lo que ofrece esta propiedad</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Vista al mar", "Seguridad 24/7", "Piscina climatizada", "Gimnasio moderno", "Parqueadero privado"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-600"><CheckCircle2 size={18} className="text-green-500"/> {item}</div>
                ))}
              </div>
            </section>

            <section className="py-6 border-t">
              <h3 className="text-xl font-bold mb-4 text-[#1E293B]">Ubicación</h3>
              <div className="w-full h-64 rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-gray-100 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-50 opacity-50"></div>
                <div className="relative z-10 text-center px-6">
                  <MapPin className="text-[#0284C7] mx-auto mb-3" size={40} />
                  <p className="text-gray-700 font-medium mb-4">Ver ubicación exacta en el mapa</p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.location)}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#0284C7] text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg"
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2 italic">Ubicación: {property.location}</p>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-[#F8FAFC] p-8 rounded-2xl border border-gray-100 shadow-sm w-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full"><User className="text-[#0284C7]"/></div>
                <div>
                    <h4 className="font-bold text-[#1E293B]">Yadira Portuondo</h4>
                    <p className="text-sm text-gray-500">Realtor® Miami</p>
                </div>
              </div>
              <button className="w-full bg-[#0284C7] text-white py-3 rounded-lg font-bold mb-3 hover:bg-blue-700 transition flex items-center justify-center gap-2"><Phone size={18} /> Llamar ahora</button>
              <button className="w-full bg-[#25D366] text-white py-3 rounded-lg font-bold mb-3 hover:bg-green-600 transition flex items-center justify-center gap-2"><Mail size={18} /> WhatsApp</button>
              <button className="w-full border-2 border-[#0284C7] text-[#0284C7] py-3 rounded-lg font-bold hover:bg-blue-50 transition flex items-center justify-center gap-2"><Calendar size={18} /> Agendar Visita</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function DetailsPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center">Cargando...</div>}>
      <PropertyContent />
    </Suspense>
  );
}