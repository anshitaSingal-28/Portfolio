import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../utils";
function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p> Feel free to get in touch!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/email.png")}></img>
          <a href="mailto:singalanshita@gmail.com">E-Mail</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedin.png")}></img>
          <a href="https://www.linkedin.com/in/anshita-singal-2132b022a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            Linkedin
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")}></img>
          <a href="https://github.com/anshitaSingal-28">Github</a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
