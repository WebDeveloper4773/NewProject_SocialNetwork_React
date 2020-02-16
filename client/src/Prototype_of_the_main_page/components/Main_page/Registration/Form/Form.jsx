import React from 'react';
import c from './Form.module.css';

const Form = () => {
    return (
        <form method={c.post}>
            <h3>Login</h3>

            <input type="text" name="login" className={c.username} placeholder="Username" />
            <input type="password" name="password" className={c.password} placeholder="password" />

            <a className={c.forgot_password} href="#"> Forgot Password?</a>
            <div className={c.login_signup_combo}>
                <div className={c.signup}>
                    <a className="dec" href="">Register</a>
                </div>
                <button type="submit" className={c.btn_login} href="#">Login</button>
            </div>
            <div className={c.form_social_links}></div>
        </form>
    );
}

export default Form;