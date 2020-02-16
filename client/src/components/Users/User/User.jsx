import React from 'react';
import './User.css';
import {GetImgFromProfile} from './../../Common/GetFromProfile'
import {MessagesIcon, HappyFace} from './../../SVG/Svg-icons'

const User = (props) => {
    return (
        <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
                <div className="friend-item">
                    <div className="friend-header-thumb">
                        <img src={props.largePhoto} alt=""/>
                    </div>
                    <div className="friend-item-content">
                        <div className="friend-avatar">
                            <div className="author-thumb">
                                <img src={props.smallPhoto} alt=""/>
                            </div>
                            <div className="author-content">
                                <a href="#" className="author-name">{props.name}</a>
                            </div>
                        </div>
                        <div className="user-container">
                            <div className="user-about">
                                <a href="#" className="friend-count-item">
                                    <div className="count">52</div>
                                    <div className="title">Friends</div>
                                </a>
                            </div>
                            <div className="user-about">
                                <a href="#" className="friend-count-item">
                                    <div className="count">240</div>
                                    <div className="title">Photos</div>
                                </a>
                            </div>
                            <div className="user-about">
                                <a href="#" className="friend-count-item">
                                    <div className="count">16</div>
                                    <div className="title">Videos</div>
                                </a>
                            </div>
                        </div>    
                        <div className="control-block-button">
                                <a href="#" className="btn btn-control bg-blue"><HappyFace /></a>
                                <a href="#" className="btn btn-control bg-purple"><MessagesIcon /></a>
                        </div>               
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;