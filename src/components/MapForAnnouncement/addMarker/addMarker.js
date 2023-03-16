import { Icon } from "leaflet";
import React, { useState } from "react";
import { Marker, useMapEvent } from "react-leaflet";
import { useDispatch } from "react-redux";
import { changeCoordinates } from "../../../redux/slices/coordinatesSlice";

export const AddMarker = () => {
  const dispatch = useDispatch();
  const [pos, setPos] = useState([]);
  useMapEvent("click", (e) => {
    setPos([e.latlng.lat, e.latlng.lng])
    dispatch(changeCoordinates([e.latlng.lat, e.latlng.lng]));
  });

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
    iconSize: [38, 38],
  });

  if (pos.length === 0) {
    return null;
  }

  return <Marker position={pos} icon={customIcon}></Marker>;
};
