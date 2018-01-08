import React from "react";
import Link from "gatsby-link";
import g from "glamorous";
import { css } from "glamor";
import { rhythm } from "../utils/typography";
import styles from "./icon-css-style.module.css";


const linkStyle = css({
  float: `right`,
  margin: '1em',
  textDecoration:'none',
  color:'black'
});

const contentStyle = css({
  margin: `0 auto`,
  maxWidth: '50vw',
  padding: 'rhythm(2)',
  paddingTop: 'rhythm(1.5)'
});

const iconStyle = css({
  marginBottom: 'rhythm(2)',
  display: `inline-block`,
  fontStyle: `normal`,
  fontWeight: 200,
  textDecoration: 'underline',
  fontFamily: 'Times New Roman',
  color: 'black',
  letterSpacing: '0.3em',
  transition: 'all 500 ease-in'
});

export default ({ children, data }) => 
  <g.Div
    margin={`0 auto`}
    maxWidth={'98vw'}
    padding={rhythm(1.5)}
    paddingTop={rhythm(1.5)}
  >
  <Link to={`/`}>
    <g.H3 className={styles.icon}>
        YVETTE ZHANG
    </g.H3>
  </Link>
    <Link className={linkStyle} to={`/about/`}>
      About
    </Link>
    <Link className={linkStyle} to={`/blog/`}>
      Blog
    </Link>
    <Link className={linkStyle} to={`/projects/`}>
      Projects
    </Link>
    <g.Div className={contentStyle}>
      {children()}
    </g.Div>
  </g.Div>

export const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`