"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Esto arregla un pequeño error de iconos de Leaflet en Next.js
const icon = L.icon({ iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png", shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png" });

export default function Map({ address }: { address: string }) {
  // Nota: Leaflet requiere coordenadas (lat, lng). 
  // Si no tienes las coordenadas, lo más sencillo gratis es usar un enlace 
  // a OpenStreetMap que abre la dirección automáticamente.
  return (
    <a 
      href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(address)}`} 
      target="_blank"
      className="block w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-center p-4 hover:bg-gray-300 transition"
    >
      Click aquí para ver la ubicación en OpenStreetMap
    </a>
  );
}