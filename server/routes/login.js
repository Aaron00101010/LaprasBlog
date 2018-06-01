const Router = require('koa-router')

const controller = require('../controllers/login')

const router = new Router()

router.post('/public/login', async ctx => { await controller.verifyUser(ctx) })

module.exports = router
