import {profileAPI} from "../API/API"; 
import axios from 'axios';

export const POST_LOADING = 'POST_LOADING';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const UPDATE_POSTS = 'UPDATE_POSTS';
export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const DELETE_POST = 'DELETE_POST';
export const CLEAR_POSTS = 'CLEAR_POSTS';

let initialState = {
    posts: [],
    totalCount: 0,
    post: null,
    isLoading: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case CLEAR_POSTS:
            return {
                ...state,
                posts: [],
                totalCount: 0
            }
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload.posts,
                totalCount: action.payload.totalCount,
                isLoading: false
            }
        case GET_POST:
            return {
                ...state,
                post: action.payload,
                isLoading: false
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case UPDATE_POSTS:
        debugger;
            return {
                ...state,
                posts: state.posts.map((p) => p._id === action.payload._id ? action.payload : p)
            }
        case UPDATE_POST:
            return {
                ...state,
                post: action.payload
            }
        case DELETE_POST:
            let newPosts = state.posts.filter((post) => post._id !== action.payload)
            return {
                ...state,
                posts: newPosts
            }   
        default:
            return state;
    }
}

const setPostLoading = (isLoading) => ({ type: POST_LOADING, payload: isLoading });
const clearPosts = () => ({ type: CLEAR_POSTS });

export const create = (post) => async (dispatch) => {
    axios
    .post('/api/posts', post)
        .then((res) => {
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        } )
}  

export const getAll = (params) => (dispatch) => {
    dispatch(setPostLoading(true))

    profileAPI.getAllPosts(params)
        .then((res) => {
            dispatch({
                type: GET_POSTS,
                payload: {
                    posts: res.data,
                    totalCount: +res.headers['x-total-count']
                }
            })
        })
        .catch(() => {
            dispatch(setPostLoading(false))
            dispatch(clearPosts())
        })  
}

export const getById = (id) => (dispatch) => {
    dispatch(setPostLoading(true))

    profileAPI.getPostById(id)
        .then((res) => dispatch({
            type: GET_POST,
            payload: res.data
        }))  
        .catch(() => dispatch(setPostLoading(false)))  
}

export const remove = (id) => (dispatch) => {
    axios
    .delete(`/api/posts/${id}`)
        .then(() => {
            dispatch({
                type: DELETE_POST,
                payload: id
            })
        } )
    /* 
    /* profileAPI.removePost(id)
        .then(() => {
            dispatch({
                type: DELETE_POST,
                payload: id
            })  
        }  ) */
}

export const createLike = (postId, TYPE) => (dispatch) => {
    /* profileAPI.createLike(postId)
        .then((res) => dispatch({
            type: TYPE,
             payload: res.data
        }))  */ 
    axios
        .post(`/api/posts/${postId}/likes`)
            .then((res) => dispatch({
                type: TYPE,
                payload: res.data
            }))    
}

export const removeLike = (postId, likeId, TYPE) => (dispatch) => {
    /* profileAPI.removeLike(postId, likeId)
        .then((res) => dispatch({
            type: TYPE,
            payload: res.data
        })) */  
    axios
        .delete(`/api/posts/${postId}/likes/${likeId}`)
            .then((res) => dispatch({
                type: TYPE,
                payload: res.data
            }))    
}

export const createComment = (postId, comment) => (dispatch) => {
    profileAPI.createComment(postId, comment)
        .then((res) => dispatch({
            type: UPDATE_POST,
            payload: res.data
        }))  
}

export const removeComment = (postId, commentId) => (dispatch) => {
    profileAPI.removeComment(postId, commentId)
        .then((res) => dispatch({
            type: UPDATE_POST,
            payload: res.data
        }))   
}

export default profileReducer;

