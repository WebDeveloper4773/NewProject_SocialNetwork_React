import React from 'react';
import c from './PostHeader.module.css';
import { GetImgFromProfile  } from './../../../../Common/GetFromProfile';
import { Link } from 'react-router-dom'

const PostHeader = (props) => {
    const onDelete = () => props.remove(props.post._id);

    return (
        <>
            <GetImgFromProfile user={props.post.user} width="50" class={c.avatar} />
            <div className={c.author_data}>
                <a href="#" className={`${c.author_name}` + ` ` + `h6`}>
                    {props.auth.user.name}
                </a>
                <div className={c.post_date}>
                    <a href="#">
                    </a>
                    <time datetime="2020-01-24T18:18">
                        {new Date(props.post.createdDate).toDateString()}
							</time>
                </div>
            </div>

            {props.auth.isAuthenticated && props.auth.user.name === props.post.user.name && (
                <button type="button" className={`btn btn-outline-secondary` + ` ` + `${c.remove}`} onClick={onDelete}>Remove</button>
            )}
        </>    
    )
}       
        
export default PostHeader;