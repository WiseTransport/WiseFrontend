// components/Map.tsx
"use client";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

const Map = ({ location }: { location: { lat: number; lon: number } }) => {
  return (
    <MapContainer
      className="-z-40 "
      center={[42.5, 27.47]}
      zoom={13}
      minZoom={12}
      style={{ height: "95vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[location.lat, location.lon]} />
      <MapUpdater location={location} />
    </MapContainer>
  );
};

const MapUpdater = ({
  location,
}: {
  location: { lat: number; lon: number };
}) => {
  const map = useMap();
  useEffect(() => {
    map.setView([location.lat, location.lon], 13);
  }, [location, map]);
  return null;
};

export default Map;
