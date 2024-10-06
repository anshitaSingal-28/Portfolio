import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("hero/hero.png")}
          alt="my_icon_img"
        ></img>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")}></img>
            <div className={styles.aboutItemText}>
              <h3>Education</h3>

              <p>
                I am currently pursuing a B.Tech in Computer Science and
                Engineering at{" "}
                <b>Guru Jambheshwar University of Science and Technology</b>{" "}
                (2021 – 2025), where I proudly maintain a CGPA of 8.30. This
                intensive academic journey has not only sharpened my technical
                skills but also fostered my problem-solving abilities, equipping
                me for a successful career in the technology sector.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")}></img>
            <div className={styles.aboutItemText}>
              <h3>Front End Developer</h3>
              <p>
                A creative front-end web developer with a talent for designing
                intuitive, visually engaging interfaces. Dedicated to delivering
                smooth, responsive user experiences that bring digital visions
                to life.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")}></img>
            <div className={styles.aboutItemText}>
              <h3>DSA Problem Solver</h3>
              <p>
                Skilled DSA problem solver with a strong grasp of algorithms and
                data structures, consistently applying efficient solutions to
                complex challenges. Passionate about optimizing code performance
                and solving problems through logical and structured approaches.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")}></img>
            <div className={styles.aboutItemText}>
              <h3>Academic Excellence</h3>
              <p>
                Consistently ranked as a topper in my university's Computer
                Science and Engineering program, showcasing a strong academic
                record and commitment to excellence.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
