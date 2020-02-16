import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
    return (
        <Header {...props} />
        /* <Header {isAuthenticated={props.isAuthenticated} logout={props.logout} profile={props.profile} user={props.user} />   */         
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user,
        currentPage: state.app.currentPage
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer);