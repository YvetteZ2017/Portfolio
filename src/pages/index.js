import React from "react";
import Link from "gatsby-link";
import Main from './Main';
import BasicLayout from '../layouts';

export default () =>
  <div style={{ color: `yellow` }}>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="/static/photos/moon.jpg" alt="" />
    <br />
    <div>
				<Link to="/about/">About</Link>
				<Link to="/contact/">contact</Link>
    </div>
    <br />
    <Main />
	</div>