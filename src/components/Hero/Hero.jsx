import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <section className={styles.cont}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anshita Singal </h1>
        <p className={styles.description}>
          I am a passionate front-end web developer skilled in building
          intuitive, responsive, and dynamic user interfaces. My expertise spans
          HTML, CSS, JavaScript, and frameworks like React, allowing me to
          create seamless, dynamic web applications. Feel free to reach out if
          you're looking for innovative web solutions!
        </p>
        <a className={styles.contactBtn} href="mailto:singalanshita@gmail.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/myicon.png")}
        alt="my_hero_image"
      ></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}

export default Hero;
