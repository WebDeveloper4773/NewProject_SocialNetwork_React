import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from "react-redux";
import { initialize } from "./redux/app-reducer";
import { withRouter} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logout } from './redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import { getUserProfile } from "./redux/profile-reducer";

import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from "./components/Users/UsersContainer";
import Login from './components/Auth/LoginMain/Login';
import FriendsNav from './components/FriendsNav/FriendsNav';
import Preloader from './components/Common/Preloader/Preloader';
import ChatApp from './components/Chat/ChatApp';

const App = (props) => {
  const isAuthenticated = useSelector( state => state.auth.isAuthenticated );
  const authUserId = useSelector( state => state.auth.userId );
  const profile = useSelector( state => state.profilePage.profile );
  const dispatch = useDispatch();

  useEffect( () => {
    if (localStorage.access_token) {
      var { access_token } = localStorage;
      setAuthToken(access_token);
      const decoded = jwtDecode(access_token);
      if (decoded) {
        dispatch(setCurrentUser(decoded)); 
      }
      const currentTime = Date.now() / 1000
      if (decoded.exp < currentTime) {       
        dispatch(logout());
        window.location.href = '/login';
      }
    }
  }, [])

  let bodyClass = isAuthenticated ? "main right-panels left-panels" : "main"

  return (
      <div className={bodyClass}>
        { 
          isAuthenticated ? ( 
            <>       
              <Navbar />
              <FriendsNav />
              <HeaderContainer />
              <div className='header-spacer'></div>
              <>  
                <Route path="#" render={ () => <ProfileContainer /> }/>
                <Route path="/Profile/:userId?" render={ () => <ProfileContainer /> }/>
             {/*<Route path="/Messages" render={ () => <ChatApp /> }/>
                <Route path="/Music" render={ () => <Music/> }/>
                <Route path="/News" render={ () => <News/> }/>
                <Route path="/Settings" render={ () => <Settings/> }/>  */}
                <Route path="/Users" render={ () => <UsersContainer /> }/>
              </>
          </>  
          ) : <Route path="/Login" render={ () => <Login history={props.history}/> }/>
        }        
      </div>  
    );
}

export default withRouter(App);
