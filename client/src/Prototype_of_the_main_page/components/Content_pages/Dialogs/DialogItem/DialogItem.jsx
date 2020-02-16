import React from 'react';
import c from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/Dialogs/' + props.id;

  return (
    <div className={c.item}>
      <NavLink to={path} activeClassName={c.active}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;