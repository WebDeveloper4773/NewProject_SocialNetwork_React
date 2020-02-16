const Koa = require('koa')

const config = require('./lib/config')
const handlers = require('./handlers')
const controllers = require('./controllers')
const mongooseConfig = require('./lib/mongoose-config')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = new Koa()

handlers.forEach((h) => app.use(h))

app.use(controllers.routes())
app.use(controllers.allowedMethods())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

module.exports = (callback) => {
  mongooseConfig()
  app.listen(config.port, callback)
  return app
}
