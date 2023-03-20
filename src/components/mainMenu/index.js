import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styles from './index.module.css';
import vectorImg from '../../assets/img/Vector.png';
import vectoraddImg from '../../assets/img/Vectoradd.png';
import vectoranImg from '../../assets/img/Vectoran.png';
import vectorhelpImg from '../../assets/img/Vectorhelp.png';
import logo from '../../assets/img/Logo.png';
import animalLogo from '../../assets/img/animalslogo.png';
import foundLogo from '../../assets/img/foundlogo.png'

export const MainMenu = () => {
    const activeClassName = ({isActive}) => isActive ? styles.activeRoute: styles.route;
    return (
        <>
            <div className={styles.wrapper}>
                <figure>
                    <img src={logo} className={styles.logo}/>
                    <img src={foundLogo} className={styles.foundLogo}/>
                    <img src={animalLogo} className={styles.animalLogo}/>
                </figure>
                <div className={styles.navWrapper}>
                    <NavLink to='/' className={activeClassName}><img src={vectorImg}/><span>Главная</span></NavLink>
                    <NavLink to='/announcements' className={activeClassName}><img src={vectoranImg}/><span>Объявления</span></NavLink>
                    <NavLink to='/addannouncement' className={activeClassName}><img src={vectoraddImg}/><span>Добавить</span></NavLink>
                    <NavLink to='/help' className={activeClassName}><img src={vectorhelpImg}/><span>Помощь</span></NavLink>
                </div>
            </div>
            <Outlet/>
        </>
    );
};