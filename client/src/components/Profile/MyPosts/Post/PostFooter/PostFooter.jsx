import React from 'react';
import c from './PostFooter.module.css';
import { Likes, ShareIcon, BalloonIcon } from './../../../../SVG/Svg-icons';
import LikesCount from './../Likes/Likes';

const PostFooter = (props) => {
    return (
        <div className={`${c.post_info}` + ` ` + `${c.inline_items}`}>
            <LikesCount postId={props.post._id} likes={props.post.likes} TYPE={props.TYPE}/>

            <ul className={c.friends_line}>
                <li>
                    <a href="#">
                        <img src="https://html.crumina.net/html-olympus/img/friend-harmonic7.jpg" alt="friend" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://html.crumina.net/html-olympus/img/friend-harmonic8.jpg" alt="friend" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://html.crumina.net/html-olympus/img/friend-harmonic9.jpg" alt="friend" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://html.crumina.net/html-olympus/img/friend-harmonic10.jpg" alt="friend" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="https://html.crumina.net/html-olympus/img/friend-harmonic11.jpg" alt="friend" />
                    </a>
                </li>
            </ul>
            <div className={c.name_people_likes}>
				<a href="#">Jenny</a> , 
                <a href="#">Robert</a> and <br/>
				6 more liked this
            </div>
            <div className={c.comments_icons}>
                <a href="#" className={`${c.post_add_icon}` + ` ` + `${c.inline_items}`}>
                    <BalloonIcon />
                    <span>15</span>
                </a>
                <a href="#" className={`${c.post_add_icon}` + ` ` + `${c.inline_items}`}>
                    <ShareIcon />
                    <span>24</span>
                </a>
            </div>
        </div>
    );
}

export default PostFooter;