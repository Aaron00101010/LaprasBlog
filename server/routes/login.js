const Router = require('koa-router');

const controller = require('../controllers/login');

const router = new Router();

router.post('/public/login', async ctx => {
  const { userName, password } = ctx.request.body;
  ctx.body = await controller.verifyUser({ userName, password });
});

module.exports = router;
