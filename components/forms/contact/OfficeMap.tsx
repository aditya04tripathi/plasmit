"use client"

import L from "leaflet"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

import "leaflet/dist/leaflet.css"

const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export type OfficeMapLocation = {
  label: string
  position: { readonly lat: number; readonly lng: number }
  address: string
}

export function OfficeMap({
  locations,
}: {
  locations: readonly OfficeMapLocation[]
}) {
  const first = locations[0]
  if (!first) return null

  return (
    <MapContainer
      center={[first.position.lat, first.position.lng]}
      zoom={15}
      className="z-0 h-[min(50vh,420px)] min-h-[280px] w-full [&_.leaflet-control-attribution]:text-muted-foreground"
      scrollWheelZoom
      aria-label="Office locations map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc) => (
        <Marker
          key={loc.label}
          position={[loc.position.lat, loc.position.lng]}
          icon={markerIcon}
        >
          <Popup>
            <span className="font-medium">{loc.label}</span>
            <br />
            <span className="text-muted-foreground">{loc.address}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
