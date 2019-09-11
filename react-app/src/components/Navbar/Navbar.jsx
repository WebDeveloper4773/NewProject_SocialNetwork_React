import React from 'react';
import c from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <aside className={c.sidebar}>
      <nav className={c.nav}>
        <div>
          <NavLink to='/Profile'>Content</NavLink>
        </div>
        <div>
          <NavLink to='/Dialogs'>Message</NavLink>
        </div>
        <div>
          <NavLink to='/Music'>Music</NavLink>
        </div>
        <div>
          <NavLink to='/News'>News</NavLink>
        </div>
        <div>
          <NavLink to='/Settings'>Settings</NavLink>
        </div>
      </nav>
    </aside>
  );
}

export default Navbar;