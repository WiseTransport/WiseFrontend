"use client";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

const Map = ({
  location,
  setLocation,
}: {
  setLocation: ({}: any) => void;
  location: { latitude: number; longitude: number };
}) => {
  return (
    <MapContainer
      center={[42.5, 27.47]}
      minZoom={12}
      style={{
        height: "95vh",
        width: "100%",
        position: "fixed",
        left: 0,
        top: 0,
      }}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[location.latitude, location.longitude]} />

      <MapUpdater location={location} />
    </MapContainer>
  );
};

const MapUpdater = ({
  location,
}: {
  location: { latitude: number; longitude: number };
}) => {
  const map = useMap();

  useEffect(() => {
    map.setView([location.latitude, location.longitude], 13);
  }, [location, map]);

  return null;
};

export { Map, MapUpdater };
