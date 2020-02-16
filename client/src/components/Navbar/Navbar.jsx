import React from 'react';
import c from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Favicon from './Favicon/Favicon';
import { OpenMenu, Newsfeed, FavPage, FriendsGroup, Headphones, MessagesIcon } from '../SVG/Svg-icons';

const Navbar = () => {
  return (
    <>
      <aside className={ `${c.fixed_sidebar}` + ` ` + `${c.fixed_sidebar_left}`}>
        <Favicon />
        <nav className={`${c.nav}` + ` ` + `btn-group-vertical` + ' ' + `${c.left_menu}`} role="group">
          <div className={`btn` + ` ` + `${c.btn_nav}`}>
            <NavLink to='#' > <OpenMenu/> </NavLink>
          </div>
          <div className={`btn` + ` ` + `${c.btn_nav}`}>
            <NavLink to='/Profile'> <FavPage/> </NavLink>
          </div>
          <div className={`btn` + ` ` + `${c.btn_nav}`}> 
            <NavLink to='#'> <Newsfeed/> </NavLink>    
          </div>
          <div className={`btn` + ` ` + `${c.btn_nav}`}>       
            <NavLink to='/Users' > <FriendsGroup /> </NavLink>
          </div> 
          <div className={`btn` + ` ` + `${c.btn_nav}`}>       
            <NavLink to='#'> <Headphones /> </NavLink>
          </div>
          <div className={`btn` + ` ` + `${c.btn_nav}`}>      
            <NavLink to='#'> <MessagesIcon /> </NavLink>
          </div>
        </nav>
      </aside>

      <aside className={`${c.fixed_sidebar}` + ` ` + `${c.fixed_sidebar_responsive}`}>
        <div className={`${c.fixed_sidebar_left}` + ` ` + `${c.sidebar_small}`}>
          <Favicon />
        </div>
      </aside> 
    </>
  );
}

export default Navbar;