import { Icon } from "leaflet";
import React, { useState, useEffect } from "react";
import { Marker } from "react-leaflet";
import styles from "../map/index.module.css"

export const AnnouncementMarker = ({ data }) => {
  const [coords, setCoords] = useState(null);
  
  let coordsArr = data[1].coords.split(',');
  useEffect(() => setCoords(coordsArr.map(string => +string)), []);
  const customIcon = new Icon({
      iconUrl: data[1].image,
      iconSize: [70, 70],
      
  });

  return <>
    {coords ? <Marker position={coords} icon={customIcon}></Marker> : null}
  </>;
};
