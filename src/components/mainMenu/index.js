import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import styles from './index.module.css';
import vectorImg from '../../assets/img/Vector.png';
import vectoraddImg from '../../assets/img/Vectoradd.png';
import vectoranImg from '../../assets/img/Vectoran.png';
import vectorhelpImg from '../../assets/img/Vectorhelp.png';
import vectorhelpsmallImg from '../../assets/img/Vectorhelpsmall.png'

export const MainMenu = () => {
    const activeClassName = ({isActive}) => isActive ? styles.activeRoute: styles.route;
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.wrapper}>
                <figure>
                    <img src="URL" alt="альтернативный текст" />
                </figure>
                <NavLink to='/' className={activeClassName}><img src={vectorImg}/><span>Главная</span></NavLink>
                <NavLink to='/announcements' className={activeClassName}><img src={vectoranImg}/><span>Объявления</span></NavLink>
                <NavLink to='/addannouncement' className={activeClassName}><img src={vectoraddImg}/><span>Добавить</span></NavLink>
                <NavLink to='/help' className={activeClassName}><img src={vectorhelpImg}/><span>Помощь</span></NavLink>
            </div>
            <Outlet/>
        </>
    );
};