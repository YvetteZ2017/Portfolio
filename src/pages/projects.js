import React from "react";
import Link from "gatsby-link";
import styles from './page.module.css';
import ProjectItem from '../components/ProjectItem';

export default () => (
    <div className={styles.page}>
        <h1>My Projects</h1>
        <div className={styles.projectContainer}>
        <ProjectItem imageSrc='/static/photos/projects/puyo-game2.png' title='Puyo Stone'/>
        <ProjectItem imageSrc='/static/photos/projects/puyo-game2.png' title='White Out'/>
        <ProjectItem imageSrc='/static/photos/projects/puyo-game2.png' title='Grace Shopper'/>
        <ProjectItem imageSrc='/static/photos/projects/puyo-game2.png' title='Neko School'/>
        
        </div>
    </div>
)