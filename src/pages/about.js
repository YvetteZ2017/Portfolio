import React from "react";
import Link from "gatsby-link";
import styles from './page.module.css';

export default () => (
  <div className={styles.page}>
    <div>
    <h1>Hello from Yvette</h1>
    <div>
      <p>
        Hello, thank you for visiting my website! 
        
        I enjoy engineering challenges in web development. 
        When I have free time I draw, play tennis, video games and develop. 
      </p>
      <blockquote>
        <p>
          There is indeed an element of luck, and no, there isn’t. The prepared
          mind sooner or later finds something important and does it. So yes, it
          is luck.{" "}
          <em>
            The particular thing you do is luck, but that you do something is
            not.
          </em>
        </p>
      </blockquote>
    </div>
  </div>
  </div>
);

