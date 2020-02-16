import React from 'react';
import './../MyPosts.css';
import {FavPage} from './../../../SVG/Svg-icons';
import NotificationItem from './NotificationItem';

const RightColPosts = React.memo(props => {
    return (
        <div className='col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12'>
            <div className='content_block'>
                <div className='content_block_title'>
                     <h6 className='title'>Last Photos</h6>
                </div>
                <div className='content_block_body'>
                    <ul className='gallery'>
                        <li>
                            <a href="#">
                                <img src="https://html.crumina.net/html-olympus/img/last-photo10-large.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="https://html.crumina.net/html-olympus/img/last-phot11-large.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="https://html.crumina.net/html-olympus/img/last-phot12-large.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="https://html.crumina.net/html-olympus/img/last-phot13-large.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                    <img src="https://html.crumina.net/html-olympus/img/last-phot14-large.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="https://html.crumina.net/html-olympus/img/last-phot15-large.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="https://html.crumina.net/html-olympus/img/last-phot16-large.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="https://html.crumina.net/html-olympus/img/last-phot17-large.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="https://html.crumina.net/html-olympus/img/last-phot18-large.jpg" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='content_block'>
                <div className='content_block_title'>
                     <h6 className='title'>Favourite Pages</h6>
                </div>
                <ul className='widget notification-list '>
                    <NotificationItem src='https://html.crumina.net/html-olympus/img/avatar41-sm.jpg'
                                      name='The Marina Bar'
                                      about='Restaurant / Bar'/>

                    <NotificationItem src='https://html.crumina.net/html-olympus/img/avatar42-sm.jpg'
                                      name='Tapronus Rock'
                                      about='Rock Band'/>

                    <NotificationItem src='https://html.crumina.net/html-olympus/img/avatar43-sm.jpg'
                                      name='Pixel Digital Design'
                                      about='Company'/>

                    <NotificationItem src='https://html.crumina.net/html-olympus/img/avatar44-sm.jpg'
                                      name='Thompson’s Custom Boutique'
                                      about='Clothing Store'/>
                                      
                    <NotificationItem src='https://html.crumina.net/html-olympus/img/avatar45-sm.jpg'
                                      name='Crimson Agency'
                                      about='Company'/>

                    <NotificationItem src='https://html.crumina.net/html-olympus/img/avatar46-sm.jpg'
                                      name='Mannequin Angel'
                                      about='Clothing Store'/>
                    
                </ul>
            </div>
        </div>
    );
})


export default RightColPosts;
