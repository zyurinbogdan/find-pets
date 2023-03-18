import React from "react";
import { AnnouncementMarker } from "./announcementMarker";

export const MarkersList = ({data}) => {
  const dataArr = Object.entries(data);
  return (<>
    {dataArr.map((marker) => <AnnouncementMarker data={marker}></AnnouncementMarker>)}
    </>
  );
};