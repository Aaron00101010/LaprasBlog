const queryDatabase = require('../utils/queryDatabase');

class Login {
  async getPassword(userName) {
    return await queryDatabase(
      `SELECT password FROM USER WHERE userName='${escape(
        String(userName).trim()
      )}'`
    );
  }
}
module.exports = new Login();
