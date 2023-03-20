import React, { useState } from "react";
import styles from './index.module.css';
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/slices/filterSlice";

export const Filter = () => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(0);
    const filterCat = (e) => {
        setSelected(1);
        dispatch(changeFilter('кот'));
    };
    const filterDog = () => {
        setSelected(2);
        dispatch(changeFilter('собака'));
    };
    const filterReset = () => {
        setSelected(3);
        dispatch(changeFilter(''));
    };
    return (
        <div className={styles.wrapper}>
            <div onClick={filterCat} className={selected === 1 ? styles.activeBtn : styles.btn}>Кот</div>
            <div onClick={filterDog} className={selected === 2 ? styles.activeBtn : styles.btn}>Собака</div>
            <div onClick={filterReset} className={styles.btn}>Сбросить</div>            
        </div>
    );
};