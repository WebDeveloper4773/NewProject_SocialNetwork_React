import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, register } from './../../../redux/auth-reducer';
import { currentPage } from './../../../redux/app-reducer';
import {LoginIcon, RegisterIcon} from './../../SVG/Svg-icons';
import './Login.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Login = (props) => {
    let [currentForm, setCurrentForm] = useState('login')

    useEffect(() => {
        props.currentPage('LOGIN');
    }, [])

    useEffect(() => {
        if (props.auth.isAuthenticated) {
            props.history.push('/')
        }
    }, [props.auth.isAuthenticated])

    let onLoginClick = (props) => {
        setCurrentForm('login')
    }
    let onRegisterClick = (props) => {
        setCurrentForm('register')
    }
    return (
        <>
            <div className='content_bg_wrap'></div>

            <div className="container login-container">
                <div className="row display-flex "> 
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="landing-content">
                            <h1>Welcome to the Biggest Social Network in the World</h1>
                            <p>
                                We are the best and biggest social network with 5 billion active users all around the world. Share you
					            thoughts, write blog posts, show your favourite music via Stopify, earn badges and much more!
                            </p>
                            <a href="" className="btn btn-md btn-border c-white">Register Now!</a>
                        </div>
                    </div>
                    <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="registration_login_form">
                                <ul className="nav nav_tabs">
                                    <div className="nav_item">
                                        <a onClick={onLoginClick} href="#" className={`nav_link` + ` ` + `${currentForm == 'login' && 'active'}`}>
                                            <LoginIcon />
                                        </a>   
                                        <div className="ripple_container">
                                        </div> 
                                    </div>
                                    <div className="nav_item">
                                        <a onClick={onRegisterClick} href="#" className={`nav_link` + ` ` + `${currentForm == 'register' && 'active'}`}>
                                            <RegisterIcon />
                                        </a>   
                                        <div className="ripple_container">
                                        </div>
                                    </div>
                                </ul>
                                <div className="tab_content">
                                    {   currentForm == 'login' ? (
                                            <>
                                                <div className="title h6">Login to your Account</div>
                                                <LoginForm login={props.login} />
                                            </>                                        
                                        ) : (
                                            <>
                                                <div className="title h6">Register Account</div>
                                                <RegisterForm register={props.register} history={props.history} />
                                            </>                                                                                       
                                        )
                                    }
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>       
        </>
    )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps, { login, register, currentPage })(Login)