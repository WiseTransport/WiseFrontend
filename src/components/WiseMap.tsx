"use client"

import { MapContainer, TileLayer, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "react-leaflet-markercluster/styles"
import { useEffect } from "react"
import { StopRoutes } from "@/components/StopRoutes.tsx"

const WiseMap = ({
  location,
}: {
  setLocation: ({}: any) => void
  location: { latitude: number; longitude: number }
}) => {
  return (
    <MapContainer
      center={[location.latitude, location.longitude]}
      minZoom={12}
      zoomControl={false}
      style={{
        height: "100%",
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

      <StopRoutes />
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
    map.setView([location.latitude, location.longitude], 13)
  }, [location, map])

  return null
}

export { WiseMap, MapUpdater }
