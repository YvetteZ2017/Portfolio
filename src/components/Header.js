import React from "react";
import Link from "gatsby-link";
import styles from "./header.module.css";


const Header = (props) => {
    const title = 'YVETTE ZHANG';
    const color = props.color;
    const position = props.position;

    return (
        <div className={styles.header} css={{ color, position }}>
        <Link to={`/`} className={styles.iconflex} css={{ color }}>
            <h3 className={styles.icon} css={{ color }}>
                {title}
            </h3>
        </Link>
        <div className={styles.nav}>
            <Link className={styles.linkStyle} to={`/projects/`} css={{ color }}>
            Projects
            </Link>
            <Link className={styles.linkStyle} to={`/blog/`} css={{ color }}>
            Blog
            </Link>
            <Link className={styles.linkStyle} to={`/about/`} css={{ color }}>
            About
            </Link>
        </div>
        </div>
    )
}

export default Header;