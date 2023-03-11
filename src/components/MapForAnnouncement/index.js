import React, { useCallback, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./index.module.css";
import { AddMarker } from "./addMarker/addMarker";


export const MapForAnnouncement = () => {
  const [coords, setCoords] = useState([52.44118, 30.98785]);
  return (
      <MapContainer className={styles.wrapper} center={coords} zoom={13}>
        <AddMarker/>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
  );
};