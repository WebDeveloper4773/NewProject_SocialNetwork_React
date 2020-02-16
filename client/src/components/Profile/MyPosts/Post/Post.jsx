import React, {useEffect} from 'react';
import c from './Post.module.css';
import PostHeader from './PostHeader/PostHeader';
import PostFooter from './PostFooter/PostFooter';
import PropTypes from 'prop-types'

const Post = ({ post, remove, auth, TYPE, removeLike, createLike }) => {
    return (
        <div className={c.center_block}>
            <article className={c.post}>
                <div className={c.post_author}>
                    <PostHeader post={post} auth={auth} remove={remove}/>
                    
                    <div className={c.postBody} dangerouslySetInnerHTML={{ __html: post.body }}></div>
                    
                    <PostFooter post={post} TYPE={'UPDATE_POSTS'} removeLike={removeLike} createLike={createLike}/>                
                </div>
            </article>
        </div>


        /* <div className={c.item}>
            <img src="http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg" alt=""/>
            {props.message}
            <div>
                <p>likes: {props.likesCount}</p>
                {props.id}
            </div>
            <button onClick={() => onClick(props.id) } >Delete post</button>
        </div> */
    );
}

Post.propTypes = {
  remove: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  TYPE: PropTypes.string.isRequired
}

export default Post;