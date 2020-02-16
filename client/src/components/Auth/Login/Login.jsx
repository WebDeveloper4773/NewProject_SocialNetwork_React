import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from './../../../redux/auth-reducer';
import { currentPage } from './../../../redux/app-reducer';

class Login extends React.Component {
  
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    this.props.currentPage('LOGIN');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/')
    }
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  onSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state)
  }

  render() {
    return (
      <div className="row mt-4 registration">
        <div className="col-4 mx-auto">
          <div className="card">
            <article className="card-body">
              <h4 className="card-title text-center mb-4 mt-1">Log In</h4>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-user"></i>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      pattern=".{5,30}"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      pattern=".{6,30}"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-dark btn-block">Login</button>
                </div>
              </form>
            </article>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps, { login, currentPage })(Login)

/* import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import LoginReduxForm from './LoginForm/LoginForm';
import { login } from './../../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = (props) => {

  useEffect(() => {
    if (props.auth.isAuthenticated) { */
      {/* <Redirect to="Profile"/> */}
  /*   }
  }, [props])

  const onSubmit = (formData) => {
    let {email, password} = formData;
    props.login({email, password});
  }
  
  return (
    <div>
      <div>
        Login
      </div>   
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>  
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

let mapStateToPropsForRedirect = (state) => ({
  auth: state.auth
})

export default connect(mapStateToPropsForRedirect, {login})(Login); */
