"use client"

import "leaflet/dist/leaflet.css"

import L from "leaflet"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const melbourneDocklands: [number, number] = [-37.8211, 144.9466]

const markerIcon = new L.Icon({
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).toString(),
  iconRetinaUrl: new URL(
    "leaflet/dist/images/marker-icon-2x.png",
    import.meta.url
  ).toString(),
  shadowUrl: new URL(
    "leaflet/dist/images/marker-shadow.png",
    import.meta.url
  ).toString(),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export function OfficeMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/20">
      <MapContainer
        center={melbourneDocklands}
        zoom={15}
        scrollWheelZoom={false}
        dragging={true}
        zoomControl={false}
        style={{ height: 320, width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={melbourneDocklands} icon={markerIcon}>
          <Popup>
            727 Collins St, Docklands VIC 3008
            <br />
            Melbourne, Australia
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

