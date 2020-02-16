import React from 'react';
import './../MyPosts.css';
import {FavPage} from './../../../SVG/Svg-icons';

const NotificationItem = (props) => {
    return (
                    <li className='inline-items'>
                        <div className='author-thumb'>
                            <img src={ props.src } alt=""/>
                        </div>
                        <div className='notification-event'>
                            <a href="#" className='notification-friend h6'>{ props.name }</a>
                            <span className='chat-item'>{ props.about }</span>
                        </div>
                        <span className='notification-icon'>
                            <a href="#">
                                <FavPage />
                            </a>
                        </span>
                    </li>
    )
}


export default NotificationItem;