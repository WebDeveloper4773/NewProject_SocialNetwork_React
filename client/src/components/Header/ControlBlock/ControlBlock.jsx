import React from 'react';
import c from './ControlBlock.module.css';
import './CssQuill.css'
import {NavLink} from "react-router-dom";
import {GetImgFromProfile} from './../../Common/GetFromProfile';
import {HappyFace, MessagesIcon, ThunderIcon, OpenMenu} from './../../SVG/Svg-icons';

const ControlBlock = (props) => {
  return (
    <div className={c.control_block}>

      <div className={c.control_icon}>
        <HappyFace />
        <div className={`${c.label_avatar}` + ` ` + `${c.bg_blue}`}>6</div>
      </div>
      <div className={c.control_icon}>
        <MessagesIcon />
        <div className={`${c.label_avatar}` + ` ` + `${c.bg_purple}`}>2</div>
      </div>
      <div className={c.control_icon}>
        <ThunderIcon />
        <div className={`${c.label_avatar}` + ` ` + `${c.bg_orange}`}>8</div>
      </div>

      <div className={c.author_page}>
        <div className={c.author_thumb}>
          <GetImgFromProfile profile={props.profile} class={c.avatar}/>
        </div>
        <a href="#" className={c.author_name} >
          <div className={c.author_title}>
            <span>{props.user.name}</span>

            <svg class="olymp-dropdown-arrow-icon">
              <svg id="olymp-dropdown-arrow-icon" viewBox="0 0 48 32">
                <title>dropdown-arrow-icon</title>
                <path d="M41.888 0.104l-17.952 19.064-17.952-19.064-5.984 6.352 23.936 25.44 23.936-25.44z"></path>
              </svg>
            </svg>

            <div className={c.more}>
              <div className={c.more_menu}>
                <div className={c.more_title}>
                </div>
                <div className={c.more_item}>
                  { props.isAuthenticated ? 
                        <a onClick={() => props.logout()} className={c.logout} href="#">logout</a> : 
                        <NavLink to={'/login'} className={c.logout}>login</NavLink> 
                      }
                </div>
              </div>
            </div>

            {/* <div>
              { props.isAuthenticated ? 
                <a onClick={() => props.logout()} className={c.login_out} href="#">logout</a> : 
                <NavLink to={'/login'} className={c.login_out}>login</NavLink> 
              }
            </div> */}

          </div>
          <span className={c.author_subtitle}>USER ABOUT</span>
        </a>  
      </div>
    </div>
  )
}
export default ControlBlock;

