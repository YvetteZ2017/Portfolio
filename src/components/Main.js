import React, { Component } from "react";
import styles from "./main.module.css";
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class Main extends Component {
    
    render() {
        return (
          <div>
          <Header color='white' position='fixed'/>
            <div className={styles.main}>
              <Carousel />
            <div className={styles.text}>
              <h3 className={styles.name}>Yvette Zhang</h3>
              <p className={styles.sub}>Full Stack Engineer | New York, NY</p>
              <p className={styles.spec}>Specialized in Javascript, React and React Native</p>
              <div className={styles.flex}>
              <p className={styles.spec}>Contact:</p>
              <p className={styles.spec}><a href={'mailto:yvettez2016@gmail.com'} className={styles.contact}>yvettez2016@gmail.com</a></p>
              </div>
            </div>
          </div>
          <Footer color='white' position='fixed'/>
          </div>
        )
    }

    
}
