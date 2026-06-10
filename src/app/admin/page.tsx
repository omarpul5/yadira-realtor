"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Eye, EyeOff } from "lucide-react";
import ImageUploader from "@/components/ImageUploader";

export default function AdminPanel() {
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [properties, setProperties] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);
  
  const [formData, setFormData] = useState({
    title: "", price: "", location: "", image: "", beds: "", baths: "", Pies2: "", type: "", description: ""
  });

  const loadProperties = async () => {
    const { data } = await supabase.from("properties").select("*");
    if (data) setProperties(data);
  };

  useEffect(() => { if (isAuth) loadProperties(); }, [isAuth]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dataToSave = { 
      title: formData.title,
      price: formData.price,
      location: formData.location,
      image: formData.image,
      images: images,
      beds: formData.beds,
      baths: formData.baths,
      Pies2: formData.Pies2,
      type: formData.type,
      description: formData.description
    };

    if (editingId) {
      const { error } = await supabase.from("properties").update(dataToSave).eq("id", editingId);
      if (error) { alert("Error al actualizar: " + error.message); return; }
      setEditingId(null);
    } else {
      const { error } = await supabase.from("properties").insert([dataToSave]);
      if (error) { alert("Error al guardar: " + error.message); return; }
    }
    
    alert("¡Guardado correctamente!");
    setFormData({ title: "", price: "", location: "", image: "", beds: "", baths: "", Pies2: "", type: "", description: "" });
    setImages([]);
    loadProperties();
  };

  const startEdit = (p: any) => {
    setEditingId(p.id);
    setFormData({
      title: p.title,
      price: p.price,
      location: p.location,
      image: p.image,
      beds: p.beds,
      baths: p.baths,
      Pies2: p.Pies2,
      type: p.type,
      description: p.description || ""
    });
    setImages(p.images || []);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isAuth) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 p-6">
        <form onSubmit={(e) => { e.preventDefault(); if (password === "Yadira2026") setIsAuth(true); else alert("Clave incorrecta"); }} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
          <h2 className="mb-4 font-bold text-xl">Acceso Admin</h2>
          <div className="relative mb-4">
            <input type={showPassword ? "text" : "password"} placeholder="Clave" onChange={e => setPassword(e.target.value)} className="border p-3 w-full rounded-lg" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-400">
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button className="bg-black text-white px-4 py-3 w-full rounded-lg font-bold">ENTRAR</button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8">{editingId ? "Editar Propiedad" : "Nueva Propiedad"}</h1>
      
      <form onSubmit={handleSubmit} className="grid gap-4 mb-10">
        <input placeholder="Título" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="border p-3 rounded-lg" required />
        <input placeholder="Precio" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="border p-3 rounded-lg" required />
        <input placeholder="Ubicación" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="border p-3 rounded-lg" required />
        <input placeholder="URL Foto Principal" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="border p-3 rounded-lg" />
        
        <label className="text-sm font-semibold mt-2">Galería de Imágenes (Sube varias):</label>
        <ImageUploader onUploadComplete={(urls) => setImages(prev => [...prev, ...urls])} />
        {images.length > 0 && <p className="text-sm text-green-600 font-bold">{images.length} fotos listas.</p>}

        <textarea 
          placeholder="Descripción detallada de la propiedad..." 
          value={formData.description} 
          onChange={e => setFormData({...formData, description: e.target.value})} 
          className="border p-3 rounded-lg w-full h-32"
        />

        <input placeholder="Pies2" value={formData.Pies2} onChange={e => setFormData({...formData, Pies2: e.target.value})} className="border p-3 rounded-lg" />
        <input placeholder="Habitaciones" value={formData.beds} onChange={e => setFormData({...formData, beds: e.target.value})} className="border p-3 rounded-lg" />
        <input placeholder="Baños" value={formData.baths} onChange={e => setFormData({...formData, baths: e.target.value})} className="border p-3 rounded-lg" />
        
        <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="border p-3 rounded-lg w-full bg-white" required>
            <option value="">Tipo de Inmueble</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Casa">Casa</option>
            <option value="Condominio">Condominio</option>
        </select>
        
        <button className="bg-blue-600 text-white p-3 rounded-lg font-bold">GUARDAR</button>
        {editingId && <button type="button" onClick={() => {setEditingId(null); setFormData({title: "", price: "", location: "", image: "", beds: "", baths: "", Pies2: "", type: "", description: ""}); setImages([])}} className="text-gray-500 underline">Cancelar edición</button>}
      </form>

      <div className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">Propiedades actuales</h2>
        {properties.map((p) => (
          <div key={p.id} className="bg-white p-6 mb-6 rounded-xl border border-gray-200 shadow-md flex gap-4 items-center">
            {/* CORRECCIÓN: Se usa lógica de respaldo para evitar error de string vacío */}
            <img 
              src={p.image || (p.images && p.images.length > 0 ? p.images[0] : "/placeholder.png")} 
              className="w-24 h-24 object-cover rounded-lg" 
              onError={(e) => (e.currentTarget.src = "/placeholder.png")}
            />
            <div className="flex-1">
              <h3 className="font-bold text-xl">{p.title}</h3>
              <p className="text-gray-600">{p.images?.length || 0} fotos en galería</p>
            </div>
            <button onClick={() => startEdit(p)} className="text-blue-500 font-bold px-4">Editar</button>
            <button onClick={async () => { await supabase.from("properties").delete().eq("id", p.id); loadProperties(); }} className="text-red-500 font-bold">Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}