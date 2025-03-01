import { LayerGroup, MapContainer, Marker, TileLayer } from "react-leaflet"

const OTPMap = () => {
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
      <Marker position={[10, 10]} />
      <LayerGroup>Layer</LayerGroup>
    </MapContainer>
  )
}
