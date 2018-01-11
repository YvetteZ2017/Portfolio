import React, { Component } from "react";
import styles from "./project-item.module.css";
import Modal from 'react-modal';


export default class ProjectItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openStatus: false
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
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

    render() {
        const { imageSrc, title } = this.props;
    
        return (
            <div className={styles.container} onClick={this.open}>
            <img src={imageSrc} className={styles.image} />
            <div className={styles.overlay}>
                <div className={styles.text}>{title}</div>
            </div>
            <Modal isOpen={this.state.openStatus} style={modalStyle} shouldCloseOnOverlayClick={true} onRequestClose={this.close}>
                <iframe src="https://vimeo.com/202093812"></iframe>
            </Modal>    
            </div>
        );
    }
}


const modalStyle = {
    overlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        zIndex: 3,
        position: 'fixed',
        left: 0,
        height: '100%',
        width: '100%',
    },
    content: {
        backgroundColor: '#fff',
        color: 'white',
        borderRadius: '4px',
        backgroundRepeat: 'no-repeat',
        outline: 'none',
        height: '80%',
        width: '80%',
        padding: '20px',
        margin: 'auto',
        zIndex: 3,
        position: 'fixed',
        justifyContent: 'center',
        left: 0
    }
}

Modal.setAppElement('#___gatsby')
