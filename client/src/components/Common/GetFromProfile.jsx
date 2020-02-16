import React from 'react'
import md5 from 'js-md5'

/* export const GetImgFromProfile =  ({ user, width = '' }) => (
  <img
    src={'http://gravatar.com/avatar/' + md5(user.email)}
    className="rounded-circle"
    alt={user.name}
    width={width}
  />
) */




export const GetImgFromProfile = (props) => {
    /* let profile = props.profile; */
    let srcPhoto = 'https://pp.userapi.com/c629215/v629215686/3ffba/o7rm4tqx8FM.jpg';
    /* let srcPhoto = 'https://sun9-17.userapi.com/c846020/v846020920/105a10/Hl5kYiOYWjM.jpg'; */
/* 
    if (profile != null) {
        if( profile.photos.small != null) {
            srcPhoto = profile.photos.small;
        } else {
            srcPhoto = 'https://pp.userapi.com/c629215/v629215686/3ffba/o7rm4tqx8FM.jpg';
        }
    } */
    return (
        <img src={srcPhoto} className={props.class}/>
    )
}

/* export const GetNameFromProfile = (props) => {
    let fullName = props.name;
    let profile = props.profile;
    
    if (profile != null) {
        if( profile.fullName != null ) {
            fullName = profile.fullName
        }
    } 
    return (
        <span>{fullName}</span>
    )
}  */