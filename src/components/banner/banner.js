import React from "react";
import styles from "./banner.module.scss"

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.title}>test assignment for frontend developer position</div>
      <div className={styles.subtitle}>We kindly remind you that your test 
      assignment should be submitted as a link to github/bitbucket repository.</div>
      <button className={styles.button}>Sing up now</button>
    </div>
  )
}