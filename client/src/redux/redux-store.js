import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReduser from "./auth-reducer";
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from './app-reducer';
import chatReduser from './chat-reducer';

let reducers  = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReduser,
    form: formReducer,
    app: appReducer,
    chat: chatReduser
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk))
);

window.state = store.getState();

export default store;