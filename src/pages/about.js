import React from "react";
import Link from "gatsby-link";
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './page.module.css';

export default () => (
  <div className={styles.flex}>
    <Header color='black'/>
    <div className={styles.page}>
      <div>
      <h1>Hello from Yvette</h1>
      <img src={'../static/photos/hello.jpg'} />
      <div>
        <p>
          Hi, thank you for visiting my website! 
        </p>
        <p>In 2016 I received my Master's degree in Mechanical Engineering. 
        After working one year as a PV solar engineer, I decided to make a transition to a field that would challenge me and aligns more closely with my interests.</p>
        <p>As I've always been interested in coding, I made my mind to become a full stack engineer.</p>
        <p>I enjoy engineering challenges in web development. 
        When I have free time I dance and play the guitar.</p>
        <br />
        <p>Proficient: Javascript, React, Redux, React-Native, Git, Node.js, Express, Sequelize, PostgreSQL, Axios, HTML, CSS</p>
        <p>Knowledgeable: R, Python, MySQL, Gatsby.js, GraphQL</p>
      </div>
    </div>
    </div>
    <Footer color='black' />
  </div>
);

