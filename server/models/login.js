const queryDatabase = require('../utils/queryDatabase')

class Login {
  async getPassword (userName) {
    const res = await queryDatabase(
      `SELECT password FROM user WHERE userName='${escape(
        String(userName).trim()
      )}'`
    )
    return res
  }
}
module.exports = new Login()
