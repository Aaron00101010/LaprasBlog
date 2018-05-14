const Test = require('../models/test');

class TestControllers {
  async getTestList() {
    return await Test.getTest()
      .then(value => {
        return { success: true, data: value };
      })
      .catch(error => {
        return { success: false, error: error };
      });
  }
}

module.exports = new TestControllers();
