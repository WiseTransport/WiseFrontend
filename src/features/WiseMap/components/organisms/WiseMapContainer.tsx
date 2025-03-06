"use client"

import "leaflet/dist/leaflet.css"
import "react-leaflet-markercluster/styles"
import { useEffect } from "react"
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet"

import { StopRoutes } from "../molecules/StopRoutes.tsx"

const WiseMapContainer = ({
  location,
}: {
  location: { latitude: number; longitude: number }
}) => {
  return (
    <MapContainer
      center={[location.latitude, location.longitude]}
      zoomControl={false}
      zoom={15}
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <StopRoutes />
      <Marker position={[location.latitude, location.longitude]} />

      <MapUpdater location={location} />
    </MapContainer>
  )
}

const MapUpdater = ({
  location,
}: {
  location: { latitude: number; longitude: number }
}) => {
  const map = useMap()

  useEffect(() => {
    map.setView([location.latitude, location.longitude])
  }, [location, map])

  return null
}

export { WiseMapContainer, MapUpdater }
