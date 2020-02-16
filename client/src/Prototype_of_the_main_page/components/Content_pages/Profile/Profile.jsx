import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import с from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://envato-shoebox-0.imgix.net/4646/3935-85f4-41a0-b940-708875ee0a15/tajak+019.jpg?w=500&h=278&fit=crop&crop=edges&auto=compress%2Cformat&s=c45335aca948555287bc4229b1632950" alt="beach" />
      </div>
      <div> 
        Ava + description
      </div>
    
      <MyPosts />
    </div>
  );
}

export default Profile;