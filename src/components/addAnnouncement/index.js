import React, { useState } from "react";
import vectorMarker from '../../assets/img/VectorMarker.png'
import { useForm } from "react-hook-form";
import { ref, push } from "firebase/database";
import styles from './index.module.css'
import vectorUser from '../../assets/img/VectorUser.png';
import vectorPhone from '../../assets/img/VectorPhone.png';
import { MapForAnnouncement } from "../MapForAnnouncement";
import { useSelector } from "react-redux";
import { selectCoordinates } from "../../redux/slices/coordinates";
import { db } from "../../utils/base";


export const AddAnnouncement = () => {
    const { register, handleSubmit } = useForm();
    const [mapIsShown, setMapIsShown] = useState(false);
    const {coordinates} = useSelector(selectCoordinates);
    console.log(coordinates)
    const onSubmit = async data => {
        const announcementRef = ref(db, 'announcement/');
        await push(announcementRef, {
            name: data.name,
            phone: data.phone,
            coords: String(coordinates),
            kind: data.kind,
            breed: data.breed,
        });
    };
    
    const showMap = () => {
        setMapIsShown(true);
    };
    
    const hideMap = () => {
        setMapIsShown(false);
    };

    const file = (e) => {
        console.log(e)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <figure></figure>
            <div className={styles.input}>
                <img src={vectorUser}></img>
                <input type='text'{...register("name")} placeholder="Ваше имя"/>
            </div>
            <div className={styles.input}>
                <img src={vectorPhone} alt='phone'></img>
                <input  type='text' {...register("phone")} placeholder="Ваш телефон"/>
            </div>
            <div className={styles.input} onClick={showMap}>
                <img src={vectorMarker}/>
                <input type='text' 
                    className={styles.inputCoords} 
                    placeholder="Укажите координаты" 
                    value={coordinates} 
                    {...register("coords")} 
                />
            </div>
            <input className={styles.inputBreed} type='text' {...register("kind")} placeholder="Вид"/>
            <input className={styles.inputBreed} type='text' {...register("breed")} placeholder="Порода"/>
            <input className={styles.submit} type="submit"/>
            <input className={styles.uploadImg} type='file' {...register('file')} placeholder="Загрузить фото" onChange={file}></input>
            {mapIsShown ? <><MapForAnnouncement/> <button className={styles.btnConfirm} onClick={hideMap}> Подтвердить </button> </> : null}
        </form>
    );
};