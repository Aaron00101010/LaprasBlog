const model = require('../models/artical');
const { escapeObj, unescapeObj } = require('../utils/escape');
const {
  articalConfig: { previewTextLength }
} = require('../config/');

class ArticalControllers {
  async getArticalList(ctx) {
    await model.getArticalList().then(value => {
      value.forEach(item => unescapeObj(item));
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
        unescapeObj(value[0]);
        ctx.body = { success: true, data: value[0] };
      }
    });
  }
  async updateArtical(ctx) {
    var data = ctx.request.body;
    var previewText = data.content.split('<!-- more -->')[0];
    data.preview = previewText
      ? previewText
      : data.content.substr(0, previewTextLength);
    data.preview = data.preview.replace(/#/g, '');
    escapeObj(data);
    await model
      .updateArtical(data)
      .then(value => {
        if (value.affectedRows === 1) {
          ctx.body = { success: true };
        } else {
          ctx.body = { success: false, error: '保存文章失败！' };
        }
      })
      .catch(error => (ctx.body = { success: false, error: error }));
  }
  async addArtical(ctx) {
    await model.addArtical().then(value => {
      if (value.affectedRows === 1) {
        ctx.body = { success: true };
      } else {
        ctx.body = { success: false, error: '添加文章失败！' };
      }
    });
  }
}

module.exports = new ArticalControllers();
