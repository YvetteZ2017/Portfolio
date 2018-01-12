import React, { Component } from "react";
import styles from "./project-item.module.css";
import Modal from 'react-modal';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';


export default class ProjectItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openStatus: false,
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.embedVideo = this.embedVideo.bind(this);
        this.linkToVideo = this.linkToVideo.bind(this);
    }

    open() {
        this.setState({
            openStatus: true
        })
    }

    close() {
        this.setState({
            openStatus: false
        })
    }

    embedVideo(id) {
        return 'https://www.youtube.com/embed/' + id + '?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1';
    }

    linkToVideo(id) {
        return 'https://www.youtube.com/watch?v=' + id;
    }

    render() {
        const { imageSrc, title, description, videoId, link, role } = this.props.info;
    
        return (
            <div className={styles.container} onClick={this.open}>
                <img src={imageSrc} className={styles.image} />
                <div className={styles.overlay}>
                    <div className={styles.text}>{title}</div>
                </div>
                <Modal isOpen={this.state.openStatus} style={modalStyle} shouldCloseOnOverlayClick={true} onRequestClose={this.close}>
                    
                    <div className={styles.videoBackground}>
                        <div className={styles.videoForeground}>
                        {
                            videoId.length? <iframe src={this.embedVideo(videoId)} frameBorder="0" allowfullscreen className={styles.iframe}></iframe> :
                            <img src={imageSrc} className={styles.image} />
                        }
                            
                        </div>
                    </div>
                    
                    <div>
                        <div className={styles.vidInfo}>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <p>{'My role: ' + role}</p>
                            {link.length ? <a href={link}>Check out this project</a> : null}
                            {videoId.length?  <a href={this.linkToVideo(videoId)}>Full Video</a> : null}
                        </div>
                    </div>
                </Modal>    
            </div>
        );
    }
}


const modalStyle = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 3,
        position: 'fixed',
        left: 0,
        height: '100%',
        width: '100%',
    },
    content: {
        color: 'black',
        backgroundRepeat: 'no-repeat',
        outline: 'none',
        height: '79.6%',
        width: '79%',
        margin: 'auto',
        zIndex: 3,
        position: 'fixed',
        justifyContent: 'center',
        left: 0,
        border: 0,
    }
}

// Modal.setAppElement('#___gatsby')
