import React from "react";
import style from './index.module.css'
import vectorsearchbtnImg from '../../assets/img/Vectorsearchbtn.png'

export const Search = () => {
    return (
        <div className={style.inputWrapper}>
            <input className={style.input} type="text" placeholder="Поиск"/>
            <img src={vectorsearchbtnImg} alt='кнопка поиска'/>
        </div>
    );
};