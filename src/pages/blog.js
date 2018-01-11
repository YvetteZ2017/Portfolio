import React from "react";
import Link from "gatsby-link";
import styles from './page.module.css';


export default ({ data }) => {
  return (
    <div className={styles.page}>
      <h1>
        My Blog
      </h1>
      <h4 className={styles.blogPosts}>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
        <Link
        to={node.fields.slug}
        css={{ textDecoration: `none`, color: `inherit` }}
      >
          <h3 style={{marginBottom: '10'}}>
            {node.frontmatter.title}{" "}
            <span className={styles.blogSpan}>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
          </Link>
          <br/>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
