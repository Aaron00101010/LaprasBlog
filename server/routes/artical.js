const Router = require('koa-router');

const checkToken = require('../middlewares/checkToken');
const controller = require('../controllers/artical');

const router = new Router();

router
  .get('/api/articalList', checkToken, async ctx =>await controller.getArticalList(ctx))
  .get('/api/articalDetail/:id', checkToken, async ctx =>await controller.getArticalDetail(ctx) )
  .post('/api/updateArtical', checkToken, async ctx => await controller.updateArtical(ctx))
  .post('/api/addArtical',checkToken,async ctx=>await controller.addArtical(ctx));

module.exports = router;
