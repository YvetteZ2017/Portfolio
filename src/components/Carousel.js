import React, { Component } from "react";
import styles from "./main.module.css";

const srcArray = [
    './static/photos/moon2.jpg',
    './static/photos/ocean.jpg',
    './static/photos/jupiter.jpg',
    './static/photos/dawn.jpg',
    './static/photos/antarctica.jpg',
];

const srcLength = srcArray.length;

let carouselInterval = null;

export default class Carousel extends Component {
    constructor() {
        super()
        this.state = {
            src: './static/photos/moon2.jpg',
            idx: 0
        }
    }

    componentDidMount() {
        carouselInterval = setInterval(() => {
            this.setState({src: srcArray[this.state.idx], idx: this.state.idx === srcLength - 1 ? 0 : this.state.idx + 1})
        }, 7000)
    }

    componentWillUnmount() {
        clearInterval(carouselInterval);
    }

    render() {
        return (
            <img src={this.state.src} className={styles.carouselImg}/>
        )
    }
}


