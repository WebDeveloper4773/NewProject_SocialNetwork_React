import React from 'react';
import './../MyPosts.css';
import c from './LeftPosts.module.css';


const LeftPosts = React.memo(props => {
    return (
            <div className='col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12'>
                <div className='content_block'>
                    <div className='content_block_title'>
                        <h6 className='title'>Profile Intro</h6>
                    </div>
                    <div className='content_block_body widget'>
                        <ul className='personal_info item_block'>
                            <li>
                                <span className='title'>About me:</span>
                                <span className='text'>Hi, I’m James, I’m 36 and I work as a Digital Designer for the  “Daydreams” Agency in Pier 56.</span>
                            </li>
                            <li>
                                <span className='title'>Favourite TV Shows::</span>
                                <span className='text'>Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.</span>
                            </li>
                            <li>
                                <span className='title'>Favourite Music Bands / Artists:</span>
                                <span className='text'>Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</span>
                            </li>
                        </ul>

                        <div className='socials widget'>
                            <h6 className='titile'></h6>
                            <a href="#" className='social_item bg_facebook'>Facebook</a>
                            <a href="#" className='social_item bg_twitter'>Twitter</a>
                            <a href="#" className='social_item bg_instagram'>Instagram</a>
                        </div>
                    </div>
                </div>

                <div className='content_block'>
                    <div className='content_block_title'>
                        <h6 className='title'>James’s Badges</h6>
                    </div>
                    <div className='content_block_body'>
                        <ul className={c.w_badges}>
                            <li>
                                <a href="#">
                                    <img src="https://html.crumina.net/html-olympus/img/badge1.png" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="https://html.crumina.net/html-olympus/img/badge4.png" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="https://html.crumina.net/html-olympus/img/badge3.png" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="https://html.crumina.net/html-olympus/img/badge6.png" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="https://html.crumina.net/html-olympus/img/badge11.png" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="https://html.crumina.net/html-olympus/img/badge8.png" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="https://html.crumina.net/html-olympus/img/badge10.png" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="https://html.crumina.net/html-olympus/img/badge13.png" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="https://html.crumina.net/html-olympus/img/badge7.png" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="https://html.crumina.net/html-olympus/img/badge12.png" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    );
})


export default LeftPosts;