import React, { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

let defualtIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = defualtIcon;

const Map = ({ height = "500px" }) => {
  const [coordinates, setCoordinates] = useState([]);
  return (
    <MapContainer center={[29.973025, 30.944339]} zoom={14} style={{ height: height }}>
      <TileLayer attribution="React Movies" url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`} />
      <MapClick
        setCoordinates={(coordinates) => {
          setCoordinates([coordinates]);
        }}
      />
      {coordinates.map((coordinate, index) => (
        <Marker key={index} position={[coordinate.lat, coordinate.lng]} />
      ))}
    </MapContainer>
  );
};
export default Map;

const MapClick = ({ setCoordinates }) => {
  useMapEvent("click", (eventArgs) => {
    console.log(eventArgs);
    setCoordinates({ lat: eventArgs.latlng.lat, lng: eventArgs.latlng.lng });
  });
  return null;
};
