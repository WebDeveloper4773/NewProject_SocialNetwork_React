import React, { useState, useEffect} from 'react';
import Profile from "./Profile";
import { getAll, getById } from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom';
import { currentPage } from './../../redux/app-reducer';



const ProfileContainer = (props) => {
    useEffect(() => {
        props.currentPage('PROFILE PAGE');
        let userId = props.match.params.userId;
        if(userId) {
            props.getById(userId);
        }
    }, [])

    return (
        <Profile {...props} updateUserStatus={props.updateUserStatus}/>
    )
}


/* class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.userData.id;
            
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    render() {
        return (
          <Profile {...this.props} updateUserStatus={this.props.updateUserStatus}/>  
        )
    }
} */

let mapStateToProps = (state) => {
    return {
        status: state.profilePage.status,
        userData: state.auth.user,
        queryParam: {}
    }
}

export default compose(
    connect(mapStateToProps, { currentPage, getAll, getById }),
    withRouter
)(ProfileContainer)