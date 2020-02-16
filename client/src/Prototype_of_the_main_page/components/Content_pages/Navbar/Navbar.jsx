import React from 'react';
import c from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={c.navbar}>
            <a href="/Profile">Profile</a>
            <a href="/Dialogs">Dialogs</a>
            <a href="/Music">Music</a>
            <a href="/News">News</a>
            <a href="/Settings">Settings</a>
        </div> 
    );
}

export default Navbar;