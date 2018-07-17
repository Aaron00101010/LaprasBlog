const queryDatabase = require('../utils/queryDatabase');

class Artical {
  async getArticalList(userName) {
    const res = await queryDatabase(
      `SELECT id,title,preview,createTime,isPublish FROM artical ORDER BY id DESC`
    );
    return res;
  }
  async getClientArticalList(userName) {
    const res = await queryDatabase(
      `SELECT id,title,preview,createTime,publishTime FROM artical WHERE isPublish='true' ORDER BY id DESC`
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
  async getClientArticalDetail(id) {
    const res = await queryDatabase(
      `SELECT id,title,content,tags,publishTime FROM artical WHERE id='${escape(
        id
      )}'`
    );
    return res;
  }
  async updateArtical(obj) {
    const res = await queryDatabase(
      `UPDATE artical SET title='${obj.title}',tags='${obj.tags}',content='${
        obj.content
      }',preview='${obj.preview}' WHERE id='${obj.id}'`
    );
    return res;
  }
  async addArtical() {
    const res = await queryDatabase(
      `INSERT INTO artical(title,createTime) VALUES('unname',CURRENT_TIME)`
    );
    return res;
  }
  async publishArtical(id) {
    const res = await queryDatabase(
      `UPDATE artical SET isPublish='true' WHERE id='${id}'`
    );
    return res;
  }
  async unpublishArtical(id) {
    const res = await queryDatabase(
      `UPDATE artical SET isPublish='false' WHERE id='${id}'`
    );
    return res;
  }
  async deleteArtical(id) {
    const res = await queryDatabase(`DELETE FROM artical WHERE id='${id}'`);
    return res;
  }
}
module.exports = new Artical();
