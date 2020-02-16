import React from 'react';
import c from './FriendLi.module.css';

const FriendLi = (props) => {
  return (
        <li>
            <div className={c.author_thumb}>
                <img src={ props.src } alt=""/>   
                <span className={c.icon_status}></span>
            </div>
        </li>
  );
}

export default FriendLi;