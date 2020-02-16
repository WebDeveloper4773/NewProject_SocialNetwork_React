/* import {getAuthUserData} from './auth-reducer'; */

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const CURRENT_PAGE = 'CURRENT_PAGE';

let initialState = {
    currentPage: 'PAGE'
}

const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageName
            }    
        default:
            return state;
    }
}

export const currentPage = (page) => ({ type: CURRENT_PAGE, pageName: page });

export default appReduser;