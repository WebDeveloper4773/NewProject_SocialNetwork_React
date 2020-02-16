import React from 'react';
import c from './ProfileDescription.module.css';
import { HappyFace, MessagesIcon, SettingsIcon } from './../../../SVG/Svg-icons';

const ProfileDescription = () => {
    return (
        <div className={c.top_header_description}>
            <div class="row">
                <div class="col col-lg-5 col-md-5 col-sm-12 col-12">
                    <ul className={c.profile_menu}>
                        <li>
                            <a href="" className={c.active}>Timeline</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Friends</a>
                        </li>                       
                    </ul>
                </div>
                <div class="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                    <ul className={c.profile_menu}>
                        <li>
                            <a href="#">Photos</a>
                        </li>
                        <li>
                            <a href="#">Videos</a>
                        </li>
                        <li>
                            <div className={c.more}>
                                <svg className={c.olymp_three_dots_icon}>
                                    <svg id="olymp-three-dots-icon" viewBox="0 0 128 32">
                                        <title>three-dots-icon</title>
                                        <path d="M112-0.008c-8.84 0-16 7.16-16 16 0 8.832 7.16 15.992 16 15.992s16-7.16 16-15.992c0-8.84-7.16-16-16-16zM64-0.008c-8.84 0-16 7.16-16 16 0 8.832 7.16 15.992 16 15.992s16-7.16 16-15.992c0-8.84-7.16-16-16-16zM16-0.008c-8.832 0-16 7.16-16 16s7.168 15.992 16 15.992 16-7.16 16-15.992c0-8.84-7.16-16-16-16z"></path>
                                    </svg>
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={c.control_block_button}>
                <a href="#" className={`btn` + ` ` + `${c.btn_control}` + ` ` + `${c.bg_blue}`}>
                    <HappyFace />
                </a>
                <a href="#" className={`btn` + ` ` + `${c.btn_control}` + ` ` + `${c.bg_purple}`}>
                    <MessagesIcon />
                </a>
                <a href="#" className={`btn` + ` ` + `${c.btn_control}` + ` ` + `${c.bg_orange}`}>
                    <SettingsIcon />
                </a>
            </div>
        </div>
    )
}

export default ProfileDescription;