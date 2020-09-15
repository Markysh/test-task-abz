import React from "react";
import styles from "./header.module.scss"

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <button className={styles.menuIcon}></button>
    </div>
  
  )
};
