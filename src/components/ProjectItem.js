import React, { Component } from "react";
import styles from "./project-item.module.css";


const ProjectItem = (props) => {
    const { imageSrc, title } = props
    
    return (
        <div className={styles.container}>
        <img src={imageSrc} className={styles.image} />
        <div className={styles.overlay}>
            <div className={styles.text}>{title}</div>
        </div>
        </div>
    )
}

export default ProjectItem;


