const Router = require('koa-router');

const checkToken = require('../middlewares/checkToken');
const controller = require('../controllers/artical');

const router = new Router();

router
  .get('/api/articalList', checkToken, async ctx => {
    ctx.body = await controller.getArticalList();
  })
  .get('/api/articalDetail/:id', checkToken, async ctx => {
    ctx.body = await controller.getArticalDetail(ctx.params.id);
  });

module.exports = router;
