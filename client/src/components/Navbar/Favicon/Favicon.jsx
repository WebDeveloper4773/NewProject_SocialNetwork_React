import React from 'react';
import c from './Favicon.module.css';

const Favicon = () => {
  return (
    <a href="" className={c.logo}>
      <div className={c.img_wrap}>
        <img src="https://html.crumina.net/html-olympus/img/logo.png" alt=""/>
      </div>
    </a>
  );
}

export default Favicon;