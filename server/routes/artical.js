const Router = require('koa-router');

const checkToken = require('../middlewares/checkToken');
const controller = require('../controllers/artical');

const router = new Router();
//admin
router
  .get('/api/articalList', checkToken, async ctx => {
    await controller.getArticalList(ctx);
  })
  .get('/api/articalDetail/:id', checkToken, async ctx => {
    await controller.getArticalDetail(ctx);
  })
  .post('/api/updateArtical', checkToken, async ctx => {
    await controller.updateArtical(ctx);
  })
  .post('/api/addArtical', checkToken, async ctx => {
    await controller.addArtical(ctx);
  })
  .post('/api/publishArtical', checkToken, async ctx => {
    await controller.publishArtical(ctx);
  })
  .post('/api/unpublishArtical', checkToken, async ctx => {
    await controller.unpublishArtical(ctx);
  })
  .post('/api/deleteArtical', checkToken, async ctx => {
    await controller.deleteArtical(ctx);
  });
//client
router.get('/api/client/articalList', checkToken, async ctx => {
  await controller.getClientArticalList(ctx);
});

module.exports = router;
