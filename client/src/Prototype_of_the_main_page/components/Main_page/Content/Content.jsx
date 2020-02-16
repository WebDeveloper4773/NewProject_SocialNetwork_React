import React from 'react';
import c from './Content.module.css';
import Friend from './Friend/Friend';

const Content = () => {
    return (
        <section className={c.content}>
            <div className={c.container}>
                <div сlass={c.content_slide}>
                    <div className={c.friend_items}>
                        <img className={c.button_left} src="https://image.flaticon.com/icons/png/512/15/15509.png" alt="button"/>
                        
                        <Friend name='Artem Kosarev' link='https://it-tehnik.ru/wp-content/uploads/matureman.png'/>
                        <Friend name='Vildan Timershin' link='https://thumbs.dreamstime.com/b/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B3%D0%BE-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D1%81-%D0%B1%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B8-%D0%BF%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B5-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D0%B5-105082137.jpg'/>
                        <Friend name='Tony Stark' link='https://cdn1.flamp.ru/eb205d59db84a3ab380e570b72f9c736.png'/>
                        <Friend name='Captain America' link='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64C0d1-1yfoEYFmNEfwUKSFAE7C7dPVirelzMW1tqMRKCdgm0'/>
                        
                        <img className="button-right" src="https://image.flaticon.com/icons/png/512/15/15509.png" alt="button"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Content;