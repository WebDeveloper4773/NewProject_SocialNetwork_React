import React from 'react';
import c from './Content_page.module.css';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Header from './../Main_page/Header/Header_nav/Header_nav';
import './Navbar/Navbar.module.css' 

const Content_page = () => {
    return (
        <div className={c.page_wrapper}>
            <div className={c.div1}></div>
            <div className={c.div2}></div>

            {/* <Header /> */}
            {/* <Navbar />
            <div className={c.content}>
                <Profile />
            </div>   */}  
        </div> 
    );
}

export default Content_page;
