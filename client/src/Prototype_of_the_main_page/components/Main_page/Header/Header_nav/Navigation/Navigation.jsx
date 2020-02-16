import React from 'react';
import c from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={c.navigation}>
            <a href="Profile">Profile</a>
            <a href="Dialogs">Dialogs</a>
            <a href="Music">Music</a>
            <a href="News">News</a>
            <a href="Settings">Settings</a>
        </nav>
    );
}

export default Navigation;