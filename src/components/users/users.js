import React from "react";
import styles from "./users.module.scss"

export const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Our cheerful users</div>
      <div className={styles.subtitle}>Attention! Sorting users by registration date</div>
      <div className={styles.card}>
        <div className={styles.icon}></div>
        <div className={styles.name}>Maximillian</div>
        <div className={styles.details}>Leading specialist of the Control Department controldepartment@gmail +380 50 678 03 24</div>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}></div>
        <div className={styles.name}>Adolph Blaine Charles David Earl Matthew Matthew</div>
        <div className={styles.details}>Contextual advertising specialist adolph.blainecharles@... +380 50 678 03 24</div>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}></div>
        <div className={styles.name}>Elizabeth</div>
        <div className={styles.details}>Frontend developer elisabet.front@gmail.com +380 50 678 03 24</div>
      </div>
      <button className={styles.button}>Show more</button>
    </div>
  )
}