import React from 'react';
import c from './Header_Main_page.module.css';

const Header = () => {
    return (
        <section className={c.header}>
            <div className={c.container}>
                <div className={c.header_slide}>
                    <div className={c.header_content}>
                        <h1 className={c.main_header_h1}>Hello human </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;