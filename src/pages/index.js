import React from "react";
import Link from "gatsby-link";
import styles from "./index.module.css";
import gara from '../../public/static/fonts/GaramondPro.ttf';


export default () =>
  <div>
  <div className={styles.main}>
    <div className={styles.caroImg}>
    <img src="/static/photos/moon.jpg" />
    </div>
    <div className={styles.text}>
      <h3 className={styles.name}>Yvette Zhang</h3>
      <p className={styles.sub}>Full Stack Engineer | New York, NY</p>
      <p className={styles.sub}>Specialized in Javascript, React and React Native</p>
    </div>
  </div>
  </div>