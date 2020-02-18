import * as axios from "axios";

const instanceMessageServer = axios.create({
    baseURL: 'http://localhost:8080/api/message/',
    headers: {
        'Content-Type': 'application/json'
    },
    mode:'no-cors'
});


const instanceLocalServer = axios.create({
    baseURL: 'http://localhost:8080/api/'
})

export const chatAPI = {
    setName(username) {
        return instanceMessageServer.post('users', username)
    }
}

export const authAPI = {
    register(userData) {
        return (
            instanceLocalServer.post('auth/register', userData) 
        )
    },
    login(userData) {
        return (
            instanceLocalServer.post('auth/login', userData)
        )
    }
}

export const profileAPI = {
    createPost(post) {
        return (
            instanceLocalServer.post('posts', post)
        )
    },
    getAllPosts(params) {
        return (
            instanceLocalServer.get('posts', { params })
        )
    },
    getPostById(id) {
        return (
            instanceLocalServer.get(`posts/${id}`)
        )
    },
    removePost(id) {
        return (
            instanceLocalServer.delete(`posts/${id}`)
        )
    },
    createLike(postId) {
        return (
            instanceLocalServer.post(`posts/${postId}/likes`)
        )
    },
    removeLike(postId, likeId) {
        return (
            instanceLocalServer.delete(`posts/${postId}/likes/${likeId}`)
        )
    },
    createComment(postId, comment) {
        return (
            instanceLocalServer.post(`posts/${postId}/comments`, comment)
        )
    },
    removeComment(postId, commentId) {
        return (
           instanceLocalServer.delete(`posts/${postId}/comments/${commentId}`)
        )
    }
}
/* export const profileAPI = {
    getUser(userId) {
        return (
            instance.get(`profile/` + userId).then(response => {
                return response.data
            })
        )      
    },
    getStatus(userId) {
        return (
            instance.get('profile/status/' + userId)
        )
    },
    updateStatus(status) {
        return (
            instance.put('/profile/status', { status })
        )
    }
} */
