import React from "react";
import Link from "gatsby-link";
import styles from "./layout-css-style.module.css";
import Footer from '../components/Footer';
import Header from '../components/Header';

export default ({ children, data }) => {
  const { title } = data.site.siteMetadata;

  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.contentStyle}>
        {children()}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      </div>
  )
}

export const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      title,
    }
  }
}
`