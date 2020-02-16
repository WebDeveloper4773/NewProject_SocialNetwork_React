import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
  return (
    <div className={c.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQoCzlPaif1SwbaZ5G8vMpxNcnSZ2d21QpPCd7LU8DUfpB32dGNw" alt=""/>
        <span> {props.name} </span>
        <button>Like</button>
    </div>
  );
}

export default Post;