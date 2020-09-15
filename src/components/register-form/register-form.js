import React from "react";
import styles from "./register-form.module.scss";

export const RegisterForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Register to get a work</div>
      <div className={styles.subtitle}>
        Attention! After successful registration and alert, update the list of
        users in the block from the top
      </div>
      <form>
        <div className={styles.inputHolder}>
          <label className={styles.inputTitle}>Name</label>
          <input type="text" placeholder="Your Name" className={styles.input} />
        </div>
        <div className={styles.inputHolder}>
          <label className={styles.inputTitle}>Email</label>
          <input
            type="email"
            placeholder="Your email"
            className={styles.input}
          />
        </div>
        <div className={styles.inputHolder}>
          <label className={styles.inputTitle}>Phone number</label>
          <input
            type="phone"
            placeholder="+380 XX XXX XX XX"
            className={styles.input}
          />
          <div className={styles.inputBottomText}>
            Enter phone number in open format
          </div>
        </div>
        <div className={styles.radioContainer}>
          <div className={styles.radioTitle}>Select your position</div>
          <div className={styles.radioItem}>
            <input type="radio" className={styles.radioInput}/>
            <label>Frontend developer</label>
          </div>
          <div className={styles.radioItem}>
            <input type="radio" className={styles.radioInput}/>
            <label>Backend developer</label>
          </div>
          <div className={styles.radioItem}>
            <input type="radio" className={styles.radioInput}/>
            <label>Designer</label>
          </div>
          <div className={styles.radioItem}>
            <input type="radio" className={styles.radioInput}/>
            <label>QA</label>
          </div>
        </div>
        <div className={styles.inputHolder}>
          <label>Photo</label>
          <div className={styles.browsePhoto}>
            <input className={styles.uploadInput} type="text" placeholder="Upload your photo" />
            <input className={styles.uploadButton} type="button" value="Browse" />
          </div>
        </div>
        <button className={styles.button}>Sing up now</button>
      </form>
    </div>
  );
};
