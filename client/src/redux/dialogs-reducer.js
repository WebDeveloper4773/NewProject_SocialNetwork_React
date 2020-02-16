const addMessage = 'addMessage';
const updateNewMessageText = 'updateNewMessageText';

let initialState = {
        dialogs: [
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

const dialogsReducer = (state = initialState, action) => {   
    switch (action.type) {
        case addMessage: {
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.message}]
            }
        }
        default:
            return state;
    }
}

export const addMessageText = (message) => ({ type: addMessage, message });

export default dialogsReducer;