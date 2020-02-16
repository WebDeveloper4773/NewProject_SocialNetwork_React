import React from 'react';
import c from './Friend.module.css';
import star from './Yellow_Star.png';

const Friend = (props) => {
    return (
        <div className={c.friend_item}>
            <div className={c.avaName}>
                <img className={c.avatar} src={props.link} alt="" />
                <p className={c.name}>{props.name}</p>
            </div>
            <div className={c.massage}>
                <p>Привет!</p> <br />
                <p>Как дела</p> <br />
                <p>Что делаешь?</p>
            </div>
            <button className={c.reply}>Reply</button>
            <img className={c.star} src={star} alt="star" />
        </div>
    );
}

export default Friend;
