import React from "react";
import styles from './index.module.css';
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/slices/filterSlice";

export const Filter = () => {
    const dispatch = useDispatch();
    const filterCat = (e) => {
        console.log(e)
        dispatch(changeFilter('кот'));
    };
    const filterDog = () => {
        dispatch(changeFilter('собака'));
    };
    const filterReset = () => {
        dispatch(changeFilter(''));
    };
    return (
        <div className={styles.wrapper}>
            <div onClick={filterCat} className={styles.btn}>Кот</div>
            <div onClick={filterDog} className={styles.btn}>Собака</div>
            <div onClick={filterReset} className={styles.btn}>Сбросить</div>            
        </div>
    );
};