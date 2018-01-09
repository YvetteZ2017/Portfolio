import React from "react";
import { css } from "glamor";

import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedIn from 'react-icons/lib/fa/linkedin';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaMedium from 'react-icons/lib/fa/medium';

const ulStyle = css({
  listStyle: 'none',
  justifyContent: 'center',
  display: 'flex'
})

const socialIcons = css({
  margin: '0.5em',
  color: '#db2049'
})


const Footer = () => {
    const github = 'https://github.com/YvetteZ2017';
    const linkedin = 'https://linkedin.com/in/yvette-zhang-100';
    const mailto = 'mailto:yvettez2016@gmail.com';
    const medium = 'https://medium.com/@yvetteRinzuchan';
  
    return (
      <div>
        <div className={ulStyle}>
            <a href={github} target="_blank" className={socialIcons}><FaGithub size={'2em'}/></a>
            <a href={linkedin} target="_blank" className={socialIcons}><FaLinkedIn size={'2em'}/></a>
            <a href={mailto} className={socialIcons}><FaEnvelope size={'2em'}/></a>
            <a href={medium} className={socialIcons}><FaMedium size={'2em'}/></a>
        </div>
        <p className={socialIcons}>© Yvette Zhang 2017</p>
      </div>
    )
  }

export default Footer;