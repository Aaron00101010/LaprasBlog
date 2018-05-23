const model = require('../models/artical');

class ArticalControllers {
  async getArticalList(params) {
    return await model.getArticalList().then(value => {
      return {
        success: true,
        data: value
      };
    });
  }
  async getArticalDetail(id) {
    return await model.getArticalDetail(id).then(value => {
      if (value.length === 0) {
        return { success: false, error: '未查询到该文章！' };
      } else {
        return {
          success: true,
          data: value[0]
        };
      }
    });
  }
}

module.exports = new ArticalControllers();
