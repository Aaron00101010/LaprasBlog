const queryDatabase = require('../utils/queryDatabase');

class Artical {
  async getArticalList(userName) {
    return await queryDatabase(
      `SELECT id,title,preview,createTime FROM artical`
    );
  }
  async getArticalDetail(id) {
    return await queryDatabase(
      `SELECT id,title,content,tags,isPublish FROM artical WHERE id=${escape(
        id
      )}`
    );
  }
}
module.exports = new Artical();
