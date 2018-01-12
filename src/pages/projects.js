import React from "react";
import Link from "gatsby-link";
import styles from './page.module.css';
import ProjectItem from '../components/ProjectItem';

export default () => (
    <div className={styles.projectPage}>
        <h1 className={styles.projectPageTitle}>My Projects</h1>
        <div className={styles.projectContainer}>
        {
            projectInfo.map((project, i) => (
                <ProjectItem key={i} info={projectInfo[i]}/>
            )
            )
        }
        </div>
    </div>
)

const projectInfo = [
    {
        title: 'White Out',
        imageSrc: '../static/photos/projects/weather.jpg',
        videoId: '',
        description: 'White Out is a mobile weather app that shows the weather of both the user’s location and other places around the world. The app was build with React-Native and D3. Users are able to search weather of any city via location auto-complete by Google API, switch between displaying temperatures in either Celsius or Fahrenheit units.',
        role: 'Sole developer over a period of four days for a hackathon competition.',
        link: 'https://github.com/YvetteZ2017/stackathon',
    },
    {
        title: 'Puyo Stone',
        imageSrc: '../static/photos/projects/puyo.png',
        videoId: '',
        description: 'Puyo Stone is a recreation of the Japanese Sega classic game Puyo-Puyo in Javascript using React.js, D3, and Firebase.',
        role: 'This game was built by a team of four. I was Responsible for D3 SVG animation, rendering and designing game interface.',
        link: 'https://puyost.one',
    },
    {
        title: 'Adopt a Rock',
        imageSrc: '../static/photos/projects/rock.png',
        videoId: '',
        description: 'An e-commerce site built with Express and Sequelize on the back end and React and React-Redux on the front end. Users can sign in with their Google account using OAuth and shop safely. It also allows users to browse, search by category, give ratings and leave feedback, purchase items via cart and checkout, and return items. Administrative users can also add, edit, or alter any inventory, descriptions, and pictures.',
        role: 'This site was built over the course of a week by a team of five.',
        link: 'https://adopt-a-rock.herokuapp.com',
    },
    {
        title: 'Neko School',
        imageSrc: '../static/photos/projects/neko.png',
        videoId: 'Muo9MvteI80',
        description: 'This web app is a coursework assignment based on sequelize, express, react, redux and Bootstrap. It is a RESTful web platform that allows users to manage the students and campuses of a school.',
        role: 'Sole developer',
        link: '',
    },
]