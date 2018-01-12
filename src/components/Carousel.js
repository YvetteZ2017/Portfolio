import React, { Component } from "react";

const srcArray = [
    './static/photos/moon.jpg',
    './static/photos/ocean.jpg',
    './static/photos/jupiter.jpg',
    './static/photos/dawn.jpg',
    './static/photos/antarctica.jpg',
];

const srcLength = srcArray.length;

export default class Carousel extends Component {
    constructor() {
        super()
        this.state = {
            src: './static/photos/moon.jpg',
            idx: 0
        }
        this.updateImg = this.updateImg.bind(this);
    }

    componentDidMount() {
        const carouselInterval = setInterval(() => {
            this.updateImg();
        }, 5000)
    }

    updateImg() {
        this.setState({src: srcArray[this.state.idx], idx: this.state.idx === srcLength - 1 ? 0 : this.state.idx + 1})
    }

    render() {
        return (
            <img src={this.state.src} style={{width: '45vw', height: '52vh', objectFit: 'cover'}}/>
        )
    }
}


