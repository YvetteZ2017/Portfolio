import React from "react";
import Link from "gatsby-link";
import Main from './Main';
import BasicLayout from '../layouts';

export default () =>
  <div style={{ color: `tomato` }}>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="/static/photos/moon.jpg" alt="" />
    <br />
    
    <br />
    <Main />
	</div>