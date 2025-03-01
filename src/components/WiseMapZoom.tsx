import { useMap } from "react-leaflet"
import { MouseEvent } from "react"

export const WiseMapZoom = () => {
  const map = useMap()
  console.log(map)

  const zoomIn = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    map.setZoom(map.getZoom() + 1)
  }
  const zoomOut = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    map.setZoom(map.getZoom() - 1)
  }

  return (
    <div className="fixed w-12 h-12 flex gap-4">
      <a
        className="leaflet-control-zoom-in"
        href="/"
        title="Zoom in"
        role="button"
        aria-label="Zoom in"
        onClick={zoomIn}
      >
        +
      </a>
      <a
        className="leaflet-control-zoom-out"
        href="/"
        title="Zoom out"
        role="button"
        aria-label="Zoom out"
        onClick={zoomOut}
      >
        −
      </a>
    </div>
  )
}
