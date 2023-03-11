import React from "react";
import { Announcement } from "../announcement";
import styles from "./index.module.css"

export const AnnouncementsList = ({data}) => {
    
    const dataArr = Object.entries(data);
    
    return ( 
        <div className={styles.wrapper}>
            {dataArr.map((ann) => 
                <Announcement data={ann}/>
            )}
        </div>
    );
};