import { Icon } from "leaflet";
import React, { useState, useEffect } from "react";
import { Marker, useMapEvent } from "react-leaflet";

export const AnnouncementMarker = ({ data }) => {
  const [coords, setCoords] = useState(null);
  
  let coordsArr = data[1].coords.split(',');
  useEffect(() => setCoords(coordsArr.map(string => +string)), []);
  const customIcon = new Icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
      iconSize: [38, 38],
  });

  return <>
    {coords ? <Marker position={coords} icon={customIcon}></Marker> : null}
  </>;
};
