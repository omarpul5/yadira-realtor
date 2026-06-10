import { Bed, Bath, Calendar } from "lucide-react";
import Link from "next/link";

export default function PropertyCard({ property }: { property: any }) {
  // Lógica de respaldo: Prioriza 'image', si no, toma la primera de 'images', o el placeholder
  const displayImage = property.image || (property.images && property.images.length > 0 ? property.images[0] : "/placeholder-default.jpg");

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="relative h-64">
        <img 
          src={displayImage} 
          alt={property.title} 
          className="w-full h-full object-cover"
          // Si la imagen falla al cargar (URL rota), fuerza el uso del placeholder
          onError={(e) => (e.currentTarget.src = "/placeholder-default.jpg")} 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <Link href={`/property/${property.id}`} className="border-2 border-white text-white px-10 py-2 rounded-full font-bold hover:bg-white hover:text-black transition">
            VER
          </Link>
        </div>
      </div>

      <div className="p-6 text-center">
        <h2 className="text-3xl font-light text-gray-800 mb-2">{property.price}</h2>
        <p className="text-gray-600 mb-6">{property.location}</p>

        <div className="flex justify-around border-t pt-4 text-gray-700">
          <div className="flex flex-col items-center">
            <Bed size={20} />
            <span className="text-sm font-bold mt-1">{property.beds} Habs</span>
          </div>
          <div className="flex flex-col items-center">
            <Bath size={20} />
            <span className="text-sm font-bold mt-1">{property.baths} Baños</span>
          </div>
          <div className="flex flex-col items-center">
            <Calendar size={20} />
            <span className="text-sm font-bold mt-1">{property.year || "N/A"}</span>
          </div>
        </div>
      </div>

      <Link href={`/property/${property.id}`} className="block w-full bg-[#C5B37D] text-white text-center py-4 font-bold hover:bg-[#b09e6d] transition">
        Ver detalles
      </Link>
    </div>
  );
}