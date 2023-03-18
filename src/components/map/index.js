import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./index.module.css";
import { ref, get, child } from "firebase/database";
import { MarkersList } from "./markersList";
import { db } from "../../utils/base";

export const MapComponent = () => {
  const [coords, setCoords] = useState([52.44118, 30.98785]);
  const dbRef = ref(db);
  const [data, setData] = useState([]);
  useEffect(() => {
    get(child(dbRef, `announcement`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
      <MapContainer className={styles.wrapper} center={coords} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkersList data={data}/>
      </MapContainer>
  );
};
