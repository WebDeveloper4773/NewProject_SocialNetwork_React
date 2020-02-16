import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';

const UsersContainer = (props) => {
    return (
        <Users {...props}/>
    )
}

let mapStateToProps = (state) => ({
    status: state.profilePage.status,
    userData: state.auth.user,
    queryParam: {}
})

export default connect(mapStateToProps, {})(UsersContainer)