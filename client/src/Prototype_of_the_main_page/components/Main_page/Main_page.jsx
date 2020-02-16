import React from 'react';
import c from './Main_page.module.css';
import Header from './Header/Header_Main_page';
import Content from './Content/Content';
import Registration from './Registration/Registration';
import Footer from './Footer/Footer';
import Header_nav from './Header/Header_nav/Header_nav';

const Main_page = () => {
    return (
        <div className={c.page_wrapper}>    
            <Header_nav />
            <Header />   
            <Content />
            <Registration />
            <Footer />
        </div> 
    );
}

export default Main_page;

