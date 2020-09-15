import React from "react";
import styles from "./personal-information.module.scss"

export const PersonalInformation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Let's get acquainted</div>
      <div className={styles.picture} />
      <div className={styles.subtitle}>I am cool frontend developer</div>
      <div className={styles.description}>
        We will evaluate how clean your approach to writing CSS and Javascript
        code is. You can use any CSS and Javascript 3rd party libraries without
        any restriction.
        <p/>
        If 3rd party css/javascript libraries are added to the project via
        bower/npm/yarn you will get bonus points. If you use any task runner
        (gulp/webpack) you will get bonus points as well. Slice service
        directory page P​SD mockup​ into HTML5/CSS3.
      </div>
      <button className={styles.button}>Sing up now</button>
    </div>
  );
};
