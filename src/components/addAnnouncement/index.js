import React, { useState } from "react";
import vectorMarker from '../../assets/img/VectorMarker.png'
import { useForm } from "react-hook-form";
import { ref, push } from "firebase/database";
import styles from './index.module.css'
import vectorUser from '../../assets/img/VectorUser.png';
import vectorPhone from '../../assets/img/VectorPhone.png';
import VectorUploadImg from '../../assets/img/VectorUploadImg1.png';
import kindOfAnimals from '../../assets/img/kindOfAnimals.png'
import breed from '../../assets/img/breed.png'
import { MapForAnnouncement } from "../MapForAnnouncement";
import { useSelector } from "react-redux";
import { selectCoordinates } from "../../redux/slices/coordinatesSlice";
import { db } from "../../utils/base";


export const AddAnnouncement = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [mapIsShown, setMapIsShown] = useState(false);
    const {coordinates} = useSelector(selectCoordinates);
    const [previewImg, setPreviewImg] = useState(VectorUploadImg);
    const onSubmit = data => {
        const announcementRef = ref(db, 'announcement/');
        const file = data.file[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            push(announcementRef, {
                name: data.name,
                phone: data.phone,
                coords: String(coordinates),
                kind: data.kind,
                breed: data.breed,
                image: reader.result,
            });
        };
    };
    const showMap = () => {
        setMapIsShown(true);
    };
    const hideMap = () => {
        setMapIsShown(false);
    };
    const preview = (input) => {
        const reader = new FileReader();
        const file = input.target.files[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPreviewImg(reader.result);
        };
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className={styles.input}>
                <img src={vectorUser}></img>
                <input type='text'{...register("name")} placeholder="Ваше имя"/>
            </div>
            <div className={styles.input}>
                <img src={vectorPhone} alt='phone'></img>
                <input  type='text' {...register("phone")} placeholder="Ваш телефон"/>
            </div>
            <div className={errors.coords ? styles.inputErr : styles.input} onClick={showMap}>
                <img src={vectorMarker}/>
                <input type='text' 
                    className={styles.inputCoords} 
                    placeholder="Укажите координаты" 
                    value={coordinates} 
                    {...register("coords")} 
                />
            </div>
            <div className={errors.kind ? styles.inputErr : styles.input}>
                <img src={kindOfAnimals} alt='kind'></img>
                <input  type='text' {...register("kind", {required: true})} placeholder="Вид"/>
            </div>
            <div className={styles.input}>
                <img src={breed} alt='kind'></img>
                <input type='text' {...register("breed")} placeholder="Порода"/>
            </div>
            <input className={styles.submit} type="submit"/>
            <label htmlFor="uploadImg" className={errors.file ? styles.uploadImgLabelErr : styles.uploadImgLabel} ><img src={previewImg}/></label>
            <input type='file' {...register('file', {required: true})} id='uploadImg'className={styles.uploadImgInput} onChange={preview}></input>
            {mapIsShown ? <><MapForAnnouncement/> <button className={styles.btnConfirm} onClick={hideMap}> Подтвердить </button> </> : null}
        </form>
    );
};