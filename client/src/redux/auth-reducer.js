import {authAPI} from "../API/API";
import {stopSubmit} from 'redux-form'
import setAuthToken from './../utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import axios from 'axios'
import {Redirect} from 'react-router-dom';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

let initialState = {
    isAuthenticated: false,
    user: {}
}

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: Object.keys(action.payload).length !== 0,
                user: action.payload
            }
        default:
        return state
    }
}


export const setCurrentUser = (user) => ({ type: SET_CURRENT_USER, payload: user })

export const register = (userData, history) => (dispatch) => {
    authAPI.register(userData).then(() => {
    })
}

export const login = (userData) => async (dispatch) => {
    const response = await authAPI.login(userData);

    const { token } = response.data;
    localStorage.setItem('access_token', token);
    setAuthToken(token);
    const decoded = jwtDecode(token);
    dispatch(setCurrentUser(decoded));
    window.location.href = '/profile';
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem('access_token');
    window.location.href = '/login';
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}

export default authReduser;

