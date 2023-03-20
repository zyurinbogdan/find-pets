import { Icon } from "leaflet";
import React, { useState, useEffect } from "react";
import { Marker } from "react-leaflet";
import { selectFilter } from "../../redux/slices/filterSlice";
import { useSelector } from "react-redux";
import { selectSearch } from "../../redux/slices/searchSlice";

export const AnnouncementMarker = ({ data }) => {
  const [coords, setCoords] = useState(null);
  let coordsArr = data[1].coords.split(',');
  const filter = useSelector(selectFilter);
  const search = useSelector(selectSearch);
  useEffect(() => setCoords(coordsArr.map(string => +string)), [filter, search]);
  const customIcon = new Icon({
      iconUrl: data[1].image,
      iconSize: [70, 70],
  });
  return <>
    {coords && coords[0] !== 0 ? <Marker position={coords} icon={customIcon}></Marker> : null}
  </>;
};
