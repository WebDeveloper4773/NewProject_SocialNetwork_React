import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


let mapStateToPropsForRedirect = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            debugger;
            if(!this.props.isAuthenticated) return <Redirect to="Login"/>   
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent

}


