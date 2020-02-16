import React from 'react';
import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className={c.content_block}>
              <ProfileInfo user={props.userData} status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
          </div> 
        </div>
      </div>
       
      <MyPostsContainer />
    </> 
  );

}

export default Profile;