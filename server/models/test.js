const getData = require('../utils/getData');

class Test {
  async getTest() {
    return await getData(`SELECT * FROM USER`);
  }
}
module.exports = new Test();
