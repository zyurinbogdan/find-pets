import React from "react";
import style from './index.module.css';
import vectorsearchbtnImg from '../../assets/img/Vectorsearchbtn.png';
import { changeSearch } from "../../redux/slices/searchSlice";
import { useDispatch } from "react-redux";

export const Search = () => {
    const dispatch = useDispatch();
    const searchHandler = (e) => {
        dispatch(changeSearch(e.target.value));
    };
    return (
        <div className={style.inputWrapper}>
            <input className={style.input} type="text" placeholder="Поиск" onChange={searchHandler}/>
            <img src={vectorsearchbtnImg} alt='кнопка поиска'/>
        </div>
    );
};