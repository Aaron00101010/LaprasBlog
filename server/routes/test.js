const Router = require('koa-router');

const controller = require('../controllers/test');

const router = new Router();

router.get('/test', async ctx => {
  ctx.body = await controller.getTestList();
});

module.exports = router;
