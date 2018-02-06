import React from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './blog-post.module.css';

export default ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div className={styles.flex}>
      <Header color='black' />
      <div className={styles.container}>
        <h1>{post.frontmatter.title}</h1>
        <h6 className={styles.date}>{post.frontmatter.date}</h6>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Footer color='black' />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;