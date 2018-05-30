const queryDatabase = require('../utils/queryDatabase');

class Artical {
  async getArticalList(userName) {
    const res = await queryDatabase(
      `SELECT id,title,preview,createTime FROM artical`
    );
    return res;
  }
  async getArticalDetail(id) {
    const res = await queryDatabase(
      `SELECT id,title,content,tags,isPublish FROM artical WHERE id=${escape(
        id
      )}`
    );
    return res;
  }
  async updateArtical(obj) {
    return await queryDatabase(
      `UPDATE artical SET title='${obj.title}',tags='${obj.tags}',content='${obj.content}' WHERE id='${obj.id}'`
    );
  }
}
module.exports = new Artical();
