import axios from 'axios'

const USER_LOADING = 'USER_LOADING'
const GET_USER = 'GET_USER'
const SUBSCRIPTION_LOADING = 'SUBSCRIPTION_LOADING'
const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION'
const GET_SUBSCRIPTIONS = 'GET_SUBSCRIPTIONS'
const DELETE_SUBSCRIPTION = 'DELETE_SUBSCRIPTION'

const initialState = {
    user: null,
    users: null,
    isLoading: false,
    subscriptions: [],
    isLoading: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBSCRIPTION_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case GET_SUBSCRIPTIONS:
            return {
                ...state,
                subscriptions: action.payload,
                isLoading: false
            }
        case ADD_SUBSCRIPTION:
            return {
                ...state,
                subscriptions: [action.payload, ...state.subscriptions]
            }
        case DELETE_SUBSCRIPTION:
            return {
                ...state,
                subscriptions: state.subscriptions.filter((s) => s._id !== action.payload)
            }
        case USER_LOADING:
            return {
                ...state,
                isLoading: action.payload
        }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}

const setUserLoading = (isLoading) => ({
  type: USER_LOADING,
  payload: isLoading
})
export const setSubscriptionLoading = (isLoading) => ({
  type: SUBSCRIPTION_LOADING,
  payload: isLoading
})

export const getUserById = (id) => (dispatch) => {
  dispatch(setUserLoading(true))
  axios
    .get(`/api/users/${id}`)
    .then((res) => dispatch({
      type: GET_USER,
      payload: res.data
    }))
    .catch(() => dispatch(setUserLoading(false)))
}

export const createSubscriptions = (like) => (dispatch) => {
  axios
    .post('/api/subscriptions', like)
    .then((res) => dispatch({
      type: ADD_SUBSCRIPTION,
      payload: res.data
    }))
}

export const getAllSubscriptions = (params = {}) => (dispatch) => {
  dispatch(setSubscriptionLoading(true))
  axios
    .get('/api/subscriptions', { params })
    .then((res) => dispatch({
      type: GET_SUBSCRIPTIONS,
      payload: res.data
    }))
    .catch(() => dispatch(setSubscriptionLoading(false)))
}

export const removeSubscriptions = (id) => (dispatch) => {
  axios
    .delete(`/api/subscriptions/${id}`)
    .then(() => dispatch({
      type: DELETE_SUBSCRIPTION,
      payload: id
    }))
}


export default usersReducer;

