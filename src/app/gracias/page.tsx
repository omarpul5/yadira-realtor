"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Gracias() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="relative min-h-[70vh] flex items-center justify-center py-24 px-6">
        {/* Fondo con imagen y overlay azul marino corporativo */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#1E293B]/85" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white max-w-2xl"
        >
          {/* Foto de perfil */}
          <img 
            src="/yadira-professional.png" 
            alt="Yadira Portuondo" 
            className="w-40 h-40 rounded-full border-4 border-white shadow-2xl mx-auto mb-6 object-cover"
          />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">¡Gracias!</h1>
          {/* TEXTO ACTUALIZADO: */}
          <h2 className="text-xl md:text-2xl font-medium mb-8">
            Tu guía se ha descargado correctamente. <br />
            Ya puedes comenzar a planificar tu inversión en Miami.
          </h2>
          
          <div className="mb-8 space-y-1">
            <p className="text-2xl font-semibold">Yadira Portuondo</p>
            <p className="text-md opacity-90">+1 (305) 629-0218</p>
            <p className="text-md opacity-90">info@yadiraportuondo.com</p>
          </div>

          {/* Botón hacia WhatsApp */}
          <a 
            href="https://wa.me/13056290218?text=Hola%20Yadira,%20acabo%20de%20descargar%20la%20guía%20inmobiliaria%20y%20me%20gustaría%20agendar%20una%20asesoría." 
            target="_blank" 
            rel="noreferrer"
            className="mb-10 px-8 py-3 bg-[#0284C7] text-white font-bold hover:bg-[#0369A1] transition-all rounded-full shadow-lg uppercase text-sm tracking-widest inline-block"
          >
            AGENDAR ASESORÍA POR WHATSAPP
          </a>

          <p className="text-md mb-6 font-medium">Comparte mi contacto o sígueme en mis redes:</p>
          
          {/* Iconos */}
          <div className="flex justify-center gap-8">
            <a href="https://www.instagram.com/yadiraportuondorealtor/" target="_blank" rel="noreferrer" className="hover:text-[#0284C7] transition-colors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://wa.me/13056290218" target="_blank" rel="noreferrer" className="hover:text-[#0284C7] transition-colors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
            <a href="mailto:info@yadiraportuondo.com" className="hover:text-[#0284C7] transition-colors">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </main>
  );
}