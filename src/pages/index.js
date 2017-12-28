import React from "react";
import Link from "gatsby-link";
import Main from './Main';

export default () =>
  <div style={{ color: `tomato` }}>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="/static/photos/moon.jpg" alt="" />
    <br />
    <div>
        <Link to="/about/">Page 2</Link>
    </div>
    <br />
    <Main />
  </div>