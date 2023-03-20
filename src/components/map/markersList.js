import React from "react";
import { AnnouncementMarker } from "./announcementMarker";
import { selectFilter } from "../../redux/slices/filterSlice";
import { useSelector } from "react-redux";
import { selectSearch } from "../../redux/slices/searchSlice";

export const MarkersList = ({data}) => {
  const dataArr = Object.entries(data);
  const filter = useSelector(selectFilter);
  const search = useSelector(selectSearch);
  const filteredList = dataArr.map(marker => <AnnouncementMarker data={marker} key={marker[0]}/>)
    .filter((marker) => marker.props.data[1].kind.toLowerCase()
    .includes(filter.filter) && (marker.props.data[1].breed.toLowerCase()
    .includes(search.search.toLowerCase()) || 
    marker.props.data[1].kind.toLowerCase().includes(search.search.toLowerCase()))
    );
  return filteredList;
};