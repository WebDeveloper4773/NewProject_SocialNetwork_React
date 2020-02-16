import profileReducer from './profile-reducer';
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Привет как дела', likesCount: 13},
                {id: 2, message: 'Все хорошо', likesCount: 2},
                {id: 3, message: 'How are you', likesCount: 2}
            ]
        },
        dialogsPage: {
            dialog: [
                {id: 1, name: 'Artem'},
                {id: 2, name: 'Semen'},
                {id: 3, name: 'Maxim'},
                {id: 4, name: 'Vildan'},
                {id: 5, name: 'Sasha'}
            ],
            
            messages: [
                {id: 1, message: 'Hello'},
                {id: 1, message: 'How are you'},
                {id: 1, message: 'Nice to meet you'},
            ]
        }  
    },
    _callSubscriber: {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}


export default store;