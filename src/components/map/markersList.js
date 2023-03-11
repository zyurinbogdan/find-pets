import { Icon } from "leaflet";
import React, { useState } from "react";
import { Marker } from "react-leaflet";
import { AnnouncementMarker } from "./announcementMarker";


export const MarkersList = ({data}) => {

  const dataArr = Object.entries(data);


  return (<>
    {dataArr.map((marker) => <AnnouncementMarker data={marker}></AnnouncementMarker>)}
    </>
  );
};