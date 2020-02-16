import React, {useEffect} from 'react';
import './Login.css';
import {Formik} from 'formik';

const LoginForm = (props) => {

    return (
        <Formik 
            initialValues={{ email:"", password:""  }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
               props.login(values) 
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue
            }) => (
                <form onSubmit={handleSubmit} className="content login-form">
                    <div className="row">
                        <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">

                            <div className="form-group" contenteditable> 
                                <input  onChange={handleChange} 
                                        value={values.name}
                                        onBlur={handleBlur}  
                                        className="form-control" 
                                        placeholder="Your Email" 
                                        type="email"
                                        name="email"/>
                            </div>

                            <div className="form-group" contenteditable>
                                <input 
                                    className="form-control" 
                                    placeholder="Your Password"
                                    type="password"
                                    name="password"
                                    onChange={handleChange} 
                                    value={values.name}
                                    onBlur={handleBlur}/>
                            </div>
                            <div className="remember">
                                <div className="checkbox clicked">
                                    <label >
                                        <input type="checkbox" />
                                        <span className="checkbox-material">
                                            <span className="check"></span>
                                        </span>
                                        <span className="rememberMe">Remember Me </span>
                                    </label>
                                </div>
                            </div>
                            
                            <button  className="btn btn-lg btn-primary full-width" type="submit" disabled={isSubmitting}>
                                Login
                            </button>  
                              

                            <div className="or"></div>

                            <a href="#" className="btn btn-lg bg-facebook full-width btn-icon-left">Login with Facebook</a>  
                            <a href="#" className="btn btn-lg bg-twitter full-width btn-icon-left">Login with Twitter</a>                                              
                        </div>
                    </div>      
                </form>
            )}
        </Formik>
    )
}

export default LoginForm