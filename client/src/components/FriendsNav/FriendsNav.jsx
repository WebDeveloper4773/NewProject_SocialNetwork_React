import React from 'react';
import c from './FriendsNav.module.css';
import { MenuIcon, MessagesIcon } from './../SVG/Svg-icons';
import FriendLi from './FriendLi/FriendLi';
import {connect} from "react-redux";

const FriendsNav = (props) => {
  return (
      <>
        <div className={`${c.fixed_sidebar}` + ` ` + `${c.right}`}>
          <div className={`${c.fixed_sidebar_right}`}>
            <div className={`${c.mCustomScrollbar}` + ` ` + `${c.ps}`}>
              <ul className={c.chat_users}>
                <FriendLi src={'https://html.crumina.net/html-olympus/img/avatar67-sm.jpg'}/>
                <FriendLi src={'https://html.crumina.net/html-olympus/img/avatar62-sm.jpg'}/>
                <FriendLi src={'https://html.crumina.net/html-olympus/img/avatar68-sm.jpg'}/>
                <FriendLi src={'https://html.crumina.net/html-olympus/img/avatar69-sm.jpg'}/>
                <FriendLi src={'https://html.crumina.net/html-olympus/img/avatar70-sm.jpg'}/>
                <FriendLi src={'https://html.crumina.net/html-olympus/img/avatar64-sm.jpg'}/>
                <FriendLi src={'https://html.crumina.net/html-olympus/img/avatar72-sm.jpg'}/>
                <FriendLi src={'https://html.crumina.net/html-olympus/img/avatar63-sm.jpg'}/>
                <FriendLi src={'https://html.crumina.net/html-olympus/img/avatar72-sm.jpg'}/>
                <FriendLi src={'https://html.crumina.net/html-olympus/img/avatar71-sm.jpg'}/>
              </ul>
            </div>
            <div className={c.search_friend}>
              <a href="#">
                <MenuIcon />
              </a>
            </div>
            <a href="#" className={c.olimpus_chat}>
              <MessagesIcon />
            </a>
          </div> 
        </div>

        <div className={`${c.fixed_sidebar}` + ` ` + `${c.fixed_sidebar_responsive}` + ` ` + `${c.right}`}>
            <div className={`${c.fixed_sidebar_right}` + ` ` + `${c.sidebar_small}`}>
              <a href="#">
                <MenuIcon />
              </a>
            </div>
        </div>
      </>
    );
}


export default FriendsNav;