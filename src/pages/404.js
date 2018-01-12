import React from "react";
import Link from "gatsby-link";
import { css } from 'glamor';

const containerStyle = css({
  textAlign: 'center'
})

const h1Style = css({
  color: '#db2049'
})

export default () => (
    <div className={containerStyle}>
      <h1 className={h1Style}>404</h1>
      <p>The requested page doesn't exist</p>
    </div>
)