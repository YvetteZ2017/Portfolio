import React from "react";
import { css } from "glamor";
import styles from '../layouts/layout-css-style.module.css';

import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedIn from 'react-icons/lib/fa/linkedin';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaMedium from 'react-icons/lib/fa/medium';

const ulStyle = css({
  listStyle: 'none',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center'
})

const socialIcons = css({
  margin: '0.5em',
  color: '#db2049',
})

const copyright = css({
  fontSize: '0.7em',
  textAlign: 'center'
})

const Footer = () => {
    const github = 'https://github.com/YvetteZ2017';
    const linkedin = 'https://linkedin.com/in/yvette-zhang-100';
    const mailto = 'mailto:yvettez2016@gmail.com';
    const medium = 'https://medium.com/@yvetteRinzuchan';
  
    return (
      <div className={styles.footer}>
        <div className={ulStyle}>
            <a href={github} target="_blank" className={socialIcons}><FaGithub size={'1.5em'}/></a>
            <a href={linkedin} target="_blank" className={socialIcons}><FaLinkedIn size={'1.5em'}/></a>
            <a href={mailto} className={socialIcons}><FaEnvelope size={'1.5em'}/></a>
            <a href={medium} className={socialIcons}><FaMedium size={'1.5em'}/></a>
        </div>
        <p className={copyright}>© Yvette Zhang 2017</p>
      </div>
    )
  }

export default Footer;