import React from 'react';
import c from './ProfileAuthor.module.css';
import ProfileStatus from "./PofileStatus/ProfileStatus";
import {GetImgFromProfile} from './../../../Common/GetFromProfile';

const ProfileAuthor = (props) => {
    return (
        <div className={`${c.top_header_author}` + ` ` + `${c.adaptive}`}>
          <a href="" >
            <GetImgFromProfile profile={props.profile} class={c.avatar}/>   
          </a>

          <div className={c.name_content}>
            <a href="" className={`${c.author_name}`}>
              {props.user.name}
            </a>
            
            <div className={c.status}>
              <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
          </div>
        </div>
    )
}

export default ProfileAuthor;