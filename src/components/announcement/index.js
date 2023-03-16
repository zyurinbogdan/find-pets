import React from "react";
import { app } from "../../utils/base";
import styles from "./index.module.css"

export const Announcement = ({data}) => {
    console.log(data)
    return (
        <div className={styles.wrapper}>
            <figure className={styles.img}>
                <img src={data[1].image} alt="image"/>
            </figure>
            <div className={styles.kind}>
                <span>{data[1].kind}</span>
            </div>
            <div className={styles.description}>
                <span>{data[1].name}</span>
                <span>{data[1].phone}</span>
                <span>{data[1].breed}</span>
            </div>
        </div>
    );
};