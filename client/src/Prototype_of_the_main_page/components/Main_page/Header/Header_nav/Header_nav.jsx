import React from 'react';
import c from './Header_nav.module.css';
import Navigation from './Navigation/Navigation';

const Header = () => {
    return (
        <div>
            <div className={c.header_nav}>
                <div className={c.nav_logo}>
                    <img src="http://themekitten.com/preview/monarch/theme-favicon-violet.png" alt="logo" />
                    <a href="/Main_page" className={c.title}>One industry</a>
                </div>

                <Navigation />
            </div>
        </div>
    );
}

export default Header;