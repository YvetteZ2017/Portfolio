import React from "react";
import Link from "gatsby-link";
import styles from "./header.module.css";


const Header = () => {
    const title = 'YVETTE ZHANG';

    return (
        <div className={styles.header}>
        <Link to={`/`} className={styles.iconflex}>
            <h3 className={styles.icon}>
                {title}
            </h3>
        </Link>
        <div className={styles.nav}>
            <Link className={styles.linkStyle} to={`/projects/`}>
            Projects
            </Link>
            <Link className={styles.linkStyle} to={`/blog/`}>
            Blog
            </Link>
            <Link className={styles.linkStyle} to={`/about/`}>
            About
            </Link>
        </div>
        </div>
    )
}

export default Header;