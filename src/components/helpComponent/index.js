import React from "react";
import styles from "./index.module.css";
import { useForm } from "react-hook-form";
import { ref, push } from "firebase/database";
import { db } from "../../utils/base";
import support from '../../assets/img/support.png'

export const HelpComponent = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const announcementRef = ref(db, "support/");
    push(announcementRef, {
      message: data.message,
      email: data.email,
      phone: data.phone,
    });
    alert("Форма отправлена");
  };
  return (
    <div className={styles.wrapper}>
      <img src={support}/>
      <h1>Поддержка</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Опишите свою проблему:</p>
        <textarea {...register("message", { required: true })}></textarea>
        <p>Ваш email:</p>
        <input
          type="text"
          {...register("email", { required: true })}
          placeholder="user@gmail.com"
        />
        <p>Ваш номер телефона:</p>
        <input type="text" {...register("phone")} placeholder="+375291112233" />
        <input className={styles.submit} type="submit" />
      </form>
    </div>
  );
};
