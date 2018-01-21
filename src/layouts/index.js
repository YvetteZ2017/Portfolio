import React from "react";
import Link from "gatsby-link";
import { css } from 'glamor';

const bodyStyle = css({
  fontWeight: 200,
  boxSizing: 'border-box',
  minHeight: '100vh',
})

export default ({ children }) => {

  return (
    <div className={bodyStyle}>
      <div>
        {children()}
      </div>
    </div>
  )
}