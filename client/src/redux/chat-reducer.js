import Chatkit, { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import * as axios from "axios";
import {chatAPI} from './../API/API'

const USER_SUBMITTED = 'USER_SUBMITTED';
const CHAT_MANAGER = 'CHAT_MANAGER';
const USERS_MESSAGES = 'USERS_MESSAGES';
const CURRENT_ROOM = 'CURRENT_ROOM';

let initialState = {
    currentUsername: '',
    currentScreen: 'WhatIsYourUsernameScreen',
    currentUser: {},
    currentRoom: {},
    messages: []
}

const chatReduser = (state = initialState, action) => {
    switch (action.type) {
        case USER_SUBMITTED:
            return {
                ...state,
                currentUsername: action.user.name,
                currentScreen: action.user.screen
            }
        case CHAT_MANAGER:
            return {
                ...state,
                currentUser: action.currentUser
            }
        case USERS_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, action.message]
            }     
        case CURRENT_ROOM:
            return {
                ...state,
                currentRoom: action.currentRoom
            }       
        default: 
            return state
    }
}
export const setCurrentNameAC = (username, screen) => ({ type: USER_SUBMITTED, user: { name: username, screen: screen }})
export const setMessages = (messages) => ({ type: USERS_MESSAGES, messages: messages })
export const setRoom = (currentRoom) => ({ type: USERS_MESSAGES, currentRoom: currentRoom })
export const currentUserAC = (currentUser) =>({ type: CHAT_MANAGER, currentUser:currentUser })

export const setCurrentName = (username, screen) => (dispatch) => {
    axios.post('https://dry-inlet-92027.herokuapp.com/api/message/users', {
        body: JSON.stringify({ username })
    })
      .then(response => {
        dispatch(setCurrentNameAC(username, screen))
      })
      .catch(error => console.error('error', error))
}

export const chatManager = (username) => (dispatch) => {
    const chatManager = new ChatManager({
      instanceLocator: 'v1:us1:a3c3748d-40c9-4409-ad19-7b6f72511fb3',
      userId: username,
      tokenProvider: new TokenProvider({
        url: 'https://dry-inlet-92027.herokuapp.com/api/message/authenticate',
      })
    })

    chatManager
      .connect()
      .then(currentUser => {
          dispatch(currentUserAC({ currentUser }))
          return currentUser.subscribeToRoom({
            roomId: 'f9f61e28-8901-4e5d-a17e-d069a1f52e78',
            messageLimit: 100,
            hooks: {
                onMessage: message => {
                    dispatch(setMessages(message))
                }
            },
        })
      })
      .then(currentRoom => {
          dispatch(setRoom(currentRoom))
       })
      .catch(error => console.error('error', error))
}

export default chatReduser;