import React from "react";
import Link from "gatsby-link";
import styles from "./layout-css-style.module.css";
import Footer from '../components/Footer';


export default ({ children, data }) => 
  <div className={styles.body}>
    <div className={styles.header}>
      <Link to={`/`} className={styles.iconflex}>
        <h3 className={styles.icon}>
            {data.site.siteMetadata.title}
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
    <div className={styles.contentStyle}>
      {children()}
    </div>
    <div className={styles.footer}>
      <Footer />
    </div>
  </div>

export const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`