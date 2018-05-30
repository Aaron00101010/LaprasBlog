const model = require('../models/artical');
const {escapeObj,unescapeObj} = require('../utils/escape')

class ArticalControllers {
  async getArticalList(ctx) {
    await model.getArticalList().then(value => {
      value.forEach(item=>unescapeObj(item))
      ctx.body = {
        success: true,
        data: value
      };
    });
  }
  async getArticalDetail(ctx) {
    await model.getArticalDetail(ctx.params.id).then(value => {
      if (value.length === 0) {
        ctx.body = { success: false, error: '未查询到该文章！' };
      } else {
        unescapeObj(value[0])
        ctx.body = { success: true, data:value[0] };
      }
    });
  }
  async updateArtical(ctx) {
    escapeObj(ctx.request.body);
    await model.updateArtical(ctx.request.body).then(value => {
      if(value.affectedRows === 1){
        ctx.body = {success:true}
      }else{
        ctx.body = {success:false,error:'保存文章失败！'}
      }
    }).catch(error=>ctx.body={success:false,error:error});
  }
}

module.exports = new ArticalControllers();
