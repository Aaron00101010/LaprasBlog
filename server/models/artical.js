const queryDatabase = require('../utils/queryDatabase');

class Artical {
  async getArticalList(userName) {
    const res = await queryDatabase(
      `SELECT id,title,preview,createTime,isPublish FROM artical ORDER BY id DESC`
    );
    return res;
  }
  async getArticalDetail(id) {
    const res = await queryDatabase(
      `SELECT id,title,content,tags,isPublish FROM artical WHERE id='${escape(
        id
      )}'`
    );
    return res;
  }
  async updateArtical(obj) {
    return await queryDatabase(
      `UPDATE artical SET title='${obj.title}',tags='${obj.tags}',content='${
        obj.content
      }',preview='${obj.preview}' WHERE id='${obj.id}'`
    );
  }
  async addArtical() {
    return await queryDatabase(
      `INSERT INTO artical(title,createTime) VALUES('unname',CURRENT_TIME)`
    );
  }
}
module.exports = new Artical();
