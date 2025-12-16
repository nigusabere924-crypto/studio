'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Shop } from '@/lib/data';
import Link from 'next/link';

// Fix for default icon issue with webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface MapViewProps {
  shops: Shop[];
}

export default function MapView({ shops }: MapViewProps) {
  if (shops.length === 0) {
    return <p>No shops to display on the map.</p>;
  }

  // Calculate the center of the map
  const center = {
    lat: shops.reduce((acc, shop) => acc + shop.location.lat, 0) / shops.length,
    lng: shops.reduce((acc, shop) => acc + shop.location.lng, 0) / shops.length,
  };

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {shops.map((shop) => (
        <Marker key={shop.id} position={[shop.location.lat, shop.location.lng]}>
          <Popup>
            <h3 className="font-bold">{shop.name}</h3>
            <p>{shop.address}</p>
            <Link href={`/shop/${shop.id}`} className="text-primary hover:underline">
              View Shop
            </Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
