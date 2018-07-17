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
  async getClientArticalList(ctx) {
    const page = ctx.params.page;
    let length, totalPage;
    await model.getClientArticalLength().then(value => {
      length = value[0]['COUNT(*)'];
      totalPage = Math.ceil(length / 10);
    });

    let resp = {
      pagenation: {
        currentPage: Number(page),
        totalPage
      }
    };
    await model.getClientArticalList((page - 1) * 10, page * 10).then(value => {
      value.forEach(item => unescapeObj(item));
      ctx.body = Object.assign(resp, {
        success: true,
        data: value
      });
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
  async getClientArticalDetail(ctx) {
    await model.getClientArticalDetail(ctx.params.id).then(value => {
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
    data.preview = previewText || data.content.substr(0, previewTextLength);
    data.preview = data.preview.replace(/#/g, '');
    escapeObj(data);
    await model
      .updateArtical(data)
      .then(value => {
        ctx.body = { success: true };
      })
      .catch(() => {
        ctx.body = { success: false, error: '保存文章失败！' };
      });
  }
  async addArtical(ctx) {
    await model
      .addArtical()
      .then(value => {
        ctx.body = { success: true };
      })
      .catch(() => {
        ctx.body = { success: false, error: '添加文章失败！' };
      });
  }
  async deleteArtical(ctx) {
    const id = ctx.request.body.id;
    await model
      .deleteArtical(id)
      .then(value => {
        if (value.affectedRows === 1) {
          ctx.body = { success: true };
        } else {
          throw new Error();
        }
      })
      .catch(err => {
        ctx.body = { success: false, error: '删除文章失败！', err };
      });
  }
  async publishArtical(ctx) {
    let id = ctx.request.body.id;
    await model
      .publishArtical(id)
      .then(value => {
        if (value.affectedRows === 1) {
          ctx.body = { success: true };
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        ctx.body = { success: false, error: '发布文章失败！' };
      });
  }
  async unpublishArtical(ctx) {
    let id = ctx.request.body.id;
    await model
      .unpublishArtical(id)
      .then(value => {
        if (value.affectedRows === 1) {
          ctx.body = { success: true };
        } else {
          throw new Error();
        }
      })
      .catch(err => {
        ctx.body = { success: false, error: '隐藏文章失败！', err };
      });
  }
}

module.exports = new ArticalControllers();
