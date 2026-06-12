"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 

export default function GuiaVendedores() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 1. Descarga del archivo PDF de vendedores
    const link = document.createElement('a');
    link.href = '/guia-vendedores.pdf'; 
    link.download = 'Guia-Vendedores-Miami.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 2. Preparar mensaje específico para Vendedores
    const message = `Hola Yadira, mi nombre es ${formData.name}. Acabo de descargar la guía para VENDEDORES desde tu web. Me gustaría hablar sobre la venta de mi propiedad. Mi correo es: ${formData.email}`;
    const whatsappUrl = `https://wa.me/13056290218?text=${encodeURIComponent(message)}`;

    // 3. Abrir WhatsApp y redirigir
    window.open(whatsappUrl, '_blank');
    router.push("/gracias");
    
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LADO IZQUIERDO: TEXTO */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6 leading-tight">
            Vende tu propiedad en Miami al mejor precio
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Maximiza el valor de tu inversión con nuestra estrategia probada. He preparado esta guía 
            exclusiva para que entiendas cómo posicionar tu inmueble y venderlo con éxito.
          </p>
          
          <ul className="space-y-4 mb-8">
            {[
              "Estrategias de pricing: Cómo atraer compradores serios.", 
              "Preparación estética: El impacto visual en el valor final.", 
              "Negociación efectiva: Asegura el mejor contrato para ti."
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[#1E293B] font-medium text-lg">
                <span className="text-[#0284C7] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* LADO DERECHO: FORMULARIO */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-[#1E293B] mb-6">Obtén tu guía de vendedores</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Tu nombre" 
              required
              className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0284C7] outline-none transition" 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />
            
            <div className="w-full">
              <PhoneInput
                country={'us'}
                value={formData.phone}
                onChange={(phone) => setFormData({...formData, phone: `+${phone}`})}
                inputClass="!w-full !p-[18px] !rounded-xl !border !border-gray-200 !text-base !font-sans !focus:ring-2 !focus:ring-[#0284C7] !pl-16"
                containerClass="!w-full"
                buttonClass="!bg-transparent !border-none !rounded-l-xl !px-4"
                placeholder="Tu teléfono"
              />
            </div>

            <input 
              type="email" 
              placeholder="Tu correo" 
              required
              className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0284C7] outline-none transition" 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            
            <div className="flex items-start gap-2 pt-2">
              <input type="checkbox" className="mt-1 flex-shrink-0" required />
              <label className="text-[11px] text-gray-600 leading-relaxed text-justify">
                Acepto los términos y condiciones y la Política de privacidad. 
                Acepto ser contactado por Yadira Portuondo por llamada, correo o mensaje de texto.
                <a href="https://www.pedronietoe.pro/politica-de-privacidad" className="block mt-1 text-[#0284C7] underline font-medium break-all" target="_blank" rel="noreferrer">
                  https://www.pedronietoe.pro/politica-de-privacidad
                </a>
              </label>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold transition shadow-md mt-2 ${isSubmitting ? 'bg-gray-400' : 'bg-[#1E293B] hover:bg-[#334155] text-white'}`}
            >
              {isSubmitting ? "Procesando..." : "Descarga tu guía de ventas"}
            </button>
          </form>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}