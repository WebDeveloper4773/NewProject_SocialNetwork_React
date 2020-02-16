const Router = require('koa-router')

const auth = require('./auth')
const chat = require('./chat')
const posts = require('./posts')
const postsComments = require('./posts-comments')
const postsLikes = require('./posts-likes')
const subscriptions = require('./subscriptions')
const users = require('./users')

const router = new Router().prefix('/api')

router.use(auth, posts, postsComments, postsLikes, subscriptions, users, chat)

module.exports = router
