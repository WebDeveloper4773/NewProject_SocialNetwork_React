import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from './../../../redux/auth-reducer';
import { currentPage } from './../../../redux/app-reducer';

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    this.props.currentPage('REGISTRATION');
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  onSubmit = (e) => {
    e.preventDefault()
    this.props.register(this.state, this.props.history)
  }

  render() {
    return (
      <div className="row mt-4">
        <div className="col-4 mx-auto">
          <div className="card">
            <article className="card-body">
              <h4 className="card-title text-center mb-4 mt-1">Registration</h4>
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
                      placeholder="Name"
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                      pattern=".{3,20}"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-envelope"></i>
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
                    />
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-dark btn-block">Register</button>
                </div>
              </form>
            </article>
          </div>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps, { register, currentPage })(Register)


/* import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterForm from './RegisterForm/RegisterForm';
import { register } from './../../../redux/auth-reducer';
import { withRouter} from 'react-router-dom';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom';

const Register = (props) => {

    useEffect(() => {
        if (props.auth.isAuthenticated) {
            {/* <Redirect to="Profile"/> }*/ /*
        }
    }, [])

    const onSubmit = (formData) => {
        let {name, email, password} = formData;
        props.register({name, email, password}, props.history );
    }

    return (
        <div>
            <div>
                Register
            </div>
            
            <RegisterForm onSubmit={onSubmit}/>
        </div>
    )
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({ auth: state.auth })

export default compose(
    withRouter,
    connect(mapStateToProps, { register })
)(Register) */