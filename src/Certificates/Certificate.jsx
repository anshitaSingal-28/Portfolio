import React from "react";
import styles from "./Certificate.module.css";
import { getImageUrl } from "../utils";

function Certificate() {
  return (
    <section id="certificates" className={styles.container}>
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.content}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <img
              className={styles.image}
              src={getImageUrl("certificate/certi.png")}
            ></img>
            <div className={styles.description}>
              <h3>Coordinator Of Internship Club</h3>
              <p>
                Led the Internship Club during the 2023-2024 session, driving
                internship opportunities and industry engagement while fostering
                leadership and collaboration. This experience sharpened my
                strategic thinking and commitment to empowering peers in their
                professional growth.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img
              className={styles.image}
              src={getImageUrl("certificate/certi.png")}
            ></img>
            <div className={styles.description}>
              <h3>Coordinator Of Drive Placement Coordination Committee</h3>
              <p>
                As the Coordinator of the Drive Placement Coordination
                Committee, I led multiple successful placement drives, ensuring
                smooth operations through strong team management and strategic
                coordination. I excelled in leadership, problem-solving, and
                optimizing processes to enhance placement success rates.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img
              className={styles.image}
              src={getImageUrl("certificate/certi.png")}
            ></img>
            <div className={styles.description}>
              <h3>Coordinator Of Campus Recruitment Training</h3>
              <p>
                Led the Campus Recruitment Training program for 900+ students,
                managing 13 batches and ensuring seamless execution through
                strong leadership and collaboration. Successfully coordinated
                logistics, fostering teamwork to deliver impactful soft skills
                training.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <img
              className={styles.image}
              src={getImageUrl("certificate/certi.png")}
            ></img>
            <div className={styles.description}>
              <h3>Trainer in Pragyan Program</h3>
              <p>
                Trained 75+ students in resume building, communication, and
                interview preparation during the PRAGYAN Soft Skills Program.
                Empowered juniors with essential career skills, fostering their
                confidence and growth.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Certificate;
