import React, { useState } from "react";
import vectorMarker from '../../assets/img/VectorMarker.png'
import { useForm } from "react-hook-form";
import { ref, push } from "firebase/database";
import styles from './index.module.css'
import vectorUser from '../../assets/img/VectorUser.png';
import vectorPhone from '../../assets/img/VectorPhone.png';
import VectorUploadImg from '../../assets/img/VectorUploadImg.png';
import { MapForAnnouncement } from "../MapForAnnouncement";
import { useSelector } from "react-redux";
import { selectCoordinates } from "../../redux/slices/coordinatesSlice";
import { db } from "../../utils/base";


export const AddAnnouncement = () => {
    const { register, handleSubmit } = useForm();
    const [mapIsShown, setMapIsShown] = useState(false);
    const {coordinates} = useSelector(selectCoordinates);
    const [previewImg, setPreviewImg] = useState(null);
    const onSubmit = async data => {
        const announcementRef = ref(db, 'announcement/');
        const file = data.file[0];
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            push(announcementRef, {
                name: data.name,
                phone: data.phone,
                coords: String(coordinates),
                kind: data.kind,
                breed: data.breed,
                image: reader.result,
            });
        }
    };
    
    const showMap = () => {
        setMapIsShown(true);
    };
    
    const hideMap = () => {
        setMapIsShown(false);
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
            <label htmlFor="uploadImg" className={styles.uploadImgLabel} ><img src={VectorUploadImg}/></label>
            <input type='file' {...register('file')} id='uploadImg'className={styles.uploadImgInput}></input>
            {mapIsShown ? <><MapForAnnouncement/> <button className={styles.btnConfirm} onClick={hideMap}> Подтвердить </button> </> : null}
        </form>
    );
};