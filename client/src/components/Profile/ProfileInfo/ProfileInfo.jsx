import React from 'react';
import c from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

import ProfileDescription from './PofileDescription/ProfieDescription';
import ProfileAuthor from './ProfileAuthor/ProfileAuthor';

const ProfileInfo = (props) => {
  return (
    <div className={c.top_header}>
        <>
          <div className={c.top_header_profile_photos}>
          {/* https://www.allgai.de/wp-content/gallery/schlossbergalm-gallery/schlossbergalm-panorama-2-web.jpg */}
            <img className={c.large_img} src={'http://html.crumina.net/html-olympus/img/top-header2.jpg'} alt=""/>          
          </div>           
        </>

        <ProfileDescription />
        <ProfileAuthor {...props}/>
    </div>
  );

}

export default ProfileInfo;
