import React from "react";
import styles from './index.module.css';

export const Filter = () => {
    return (
        <div className={styles.wrapper}>
            <div><span>Кот</span></div>
            <div><span>Собака</span></div>
            <div><span>Другое</span></div>            
        </div>
    );
};