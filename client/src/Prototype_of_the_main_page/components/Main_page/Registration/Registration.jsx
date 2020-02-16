import React from 'react';
import c from './Registration.module.css';
import Form from './Form/Form';

const Registration = () => {
    return (
        <section className={c.registration}>
            <div className={c.container}>
                <div className={c.registration_slide}>
                    <div className={c.fog}>
                        <div className={c.registration_slide_content}>
                            <div className={c.reg_left}>
                                <h3>Welcome!</h3>
                                <p>Login with Social Links:</p>
                            </div>
                            <div className={c.reg_right}>
                                <Form />                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Registration;