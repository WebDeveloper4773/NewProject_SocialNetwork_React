const Chatkit = require('@pusher/chatkit-server')
const Router = require('koa-router')
const router = new Router().prefix('/message')

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:a3c3748d-40c9-4409-ad19-7b6f72511fb3',
  key: 'c20b05f5-5826-4382-8a06-fee55abe64bd:RSyLd8BnQPnU9WbhKiKt7PEWRUpl/RfxcPgFJk3Axo8='
})

router.post('/users', (req, res) => {
  const { username } = req.body
  chatkit
    .createUser({
      id: username,
      name: username
    })
    .then(() => res.sendStatus(201))
    .catch(error => {
      if (error.error === 'services/chatkit/user_already_exists') {
        res.sendStatus(200)
      } else {
        res.status(error.status).json(error)
      }
    })
})

router.post('/authenticate', (req, res) => {
  const authData = chatkit.authenticate({ userId: req.query.user_id })
  res.status(authData.status).send(authData.body)
})

module.exports = router.routes()