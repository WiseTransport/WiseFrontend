"use client"

import "leaflet/dist/leaflet.css"
import "react-leaflet-markercluster/styles"
import { useEffect } from "react"
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet"

import { StopRoutes } from "../molecules/StopRoutes.tsx"
import { BottomPanelControl } from "@/features/WiseMap/types.ts"

const WiseMapContainer = ({
  bottomPanelControl,
  location,
}: {
  bottomPanelControl: BottomPanelControl
  location: { latitude: number; longitude: number }
}) => {
  return (
    <MapContainer
      center={[location.latitude, location.longitude]}
      zoomControl={false}
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

      <StopRoutes bottomPanelControl={bottomPanelControl} />
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
    map.setView([location.latitude, location.longitude], 13)
  }, [location, map])

  return null
}

export { WiseMapContainer, MapUpdater }
