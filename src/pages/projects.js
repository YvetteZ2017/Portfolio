import React from "react";
import Link from "gatsby-link";
import styles from './page.module.css';
import ProjectItem from '../components/ProjectItem';

export default () => (
    <div className={styles.projectPage}>
        <h1 className={styles.projectPageTitle}>My Projects</h1>
        <div className={styles.projectContainer}>
            <ProjectItem imageSrc='/static/photos/projects/puyo-game2.png' title='Puyo Stone'/>
            <ProjectItem imageSrc='/static/photos/projects/puyo-game2.png' title='White Out'/>
            <ProjectItem imageSrc='/static/photos/projects/puyo-game2.png' title='Grace Shopper'/>
            <ProjectItem imageSrc='/static/photos/projects/puyo-game2.png' title='Neko School'/>
        </div>
    </div>
)

const projectInfo = [
    {
        title: 'White Out',
        imageSrc: '/static/photos/projects/puyo-game2.png',
        videoSrc: '',
        discription: '',
        link: ''
    },
    {
        title: 'Puyo Stone',
        imageSrc: '/static/photos/projects/puyo-game2.png',
        videoSrc: '',
        discription: '',
        link: 'https://puyost.one',
    },
    {
        title: 'Adopt a Rock',
        imageSrc: '/static/photos/projects/puyo-game2.png',
        videoSrc: '',
        discription: '',
        link: 'https://adopt-a-rock.herokuapp.com',
    },
    {
        title: 'Puyo Stone',
        imageSrc: '/static/photos/projects/puyo-game2.png',
        videoSrc: '',
        discription: '',
        link: 'https://puyost.one',
    },
]