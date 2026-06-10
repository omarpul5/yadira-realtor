"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ImageUploader({ onUploadComplete }: { onUploadComplete: (urls: string[]) => void }) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;

    try {
      setUploading(true);
      const files = Array.from(event.target.files);
      const uploadedUrls: string[] = [];

      for (const file of files) {
        // Crear un nombre único para el archivo
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random()}.${fileExt}`;

        // Subir al bucket 'properties-images'
        const { error: uploadError } = await supabase.storage
          .from('properties-images')
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        // Obtener la URL pública
        const { data: publicUrlData } = supabase.storage
          .from('properties-images')
          .getPublicUrl(fileName);

        uploadedUrls.push(publicUrlData.publicUrl);
      }

      // Devolvemos la lista de URLs al formulario padre
      onUploadComplete(uploadedUrls);
    } catch (error) {
      console.error("Error subiendo imágenes:", error);
      alert("Hubo un error al subir las imágenes.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
      <input 
        type="file" 
        multiple 
        accept="image/*" 
        onChange={handleUpload} 
        disabled={uploading}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      {uploading && <p className="mt-2 text-blue-600 font-bold">Subiendo fotos, por favor espera...</p>}
    </div>
  );
}