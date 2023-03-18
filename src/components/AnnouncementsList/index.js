import React from "react";
import { Announcement } from "../announcement";
import styles from "./index.module.css"
import { selectFilter } from "../../redux/slices/filterSlice";
import { useSelector } from "react-redux";
import { selectSearch } from "../../redux/slices/searchSlice";

export const AnnouncementsList = ({data}) => {
    const filter = useSelector(selectFilter);
    const search = useSelector(selectSearch);
    const dataArr = Object.entries(data);
    const filteredList = dataArr.map(ann => <Announcement data={ann}/>)
                        .filter((ann) => ann.props.data[1].kind
                        .toLowerCase()
                        .includes(filter.filter) && 
                        ann.props.data[1].breed.toLowerCase().includes(search.search));
    return (
        <div className={styles.wrapper}>
            {filteredList}
        </div>
    );
};