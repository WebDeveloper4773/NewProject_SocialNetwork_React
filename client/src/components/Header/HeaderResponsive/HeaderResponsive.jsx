import React from 'react';
import c from './HeaderResponsive.module.css';
import {Search, HappyFace, MessagesIcon, ThunderIcon, GlassIcon} from './../../SVG/Svg-icons';

const HeaderResponsive = (props) => {
  return (
    <header className={`${c.header}` + ` ` + `${c.header_responsive}`}>
        <div className={c.header_wrapper}>
            <ul className={`nav` + ` ` + `nav-tabs` + ` ` + `${c.mobile_app_tabs}`}>
                <li className={c.nav_item}>
                    <a href="#" className={`${c.navigation_link}` + ` ` + `${c.nav_link}`}>
                        <div className={c.control_icon}>
                            <HappyFace />
                            <div className={`${c.label_avatar}` + ` ` + `${c.bg_blue}`}>5</div>
                        </div>
                    </a>
                </li>
                <li className={c.nav_item}>
                    <a href="#" className={`${c.navigation_link}` + ` ` + `${c.nav_link}`}>
                        <div className={c.control_icon}>
                            <MessagesIcon />
                            <div className={`${c.label_avatar}` + ` ` + `${c.bg_purple}`}>6</div>
                        </div>
                    </a>
                </li>
                <li className={c.nav_item}>
                    <a href="#" className={`${c.navigation_link}` + ` ` + `${c.nav_link}`}>
                        <div className={c.control_icon}>
                            <ThunderIcon />
                            <div className={`${c.label_avatar}` + ` ` + `${c.bg_orange}`}>2</div>
                        </div>
                    </a>
                </li>
                <li className={c.nav_item}>
                    <a href="#" className={`${c.navigation_link}` + ` ` + `${c.nav_link}`}>
                        <div className={c.control_icon}>
                            <GlassIcon />
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </header>

  );
}

export default HeaderResponsive;