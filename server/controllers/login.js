const md5 = require('md5');
const login = require('../models/login');

class LoginControllers {
  async verifyUser(params) {
    return await login
      .getPassword(params.userName)
      .then(value => {
        if (value.length === 0) {
          return { success: false, error: '用户名不存在！' };
        } else {
          return value[0].password === md5(String(params.password))
            ? { success: true }
            : { success: false, error: '密码验证错误！' };
        }
      })
      .catch(error => {
        return { success: false, error: '500' };
      });
  }
}

module.exports = new LoginControllers();
