const md5 = require('md5')
const login = require('../models/login')
const jsonwebtoken = require('jsonwebtoken')
const { jwtSecret } = require('../config/')

class LoginControllers {
  async verifyUser (ctx) {
    const { userName, password } = ctx.request.body
    await login.getPassword(userName).then(value => {
      if (value.length === 0) {
        ctx.body = { success: false, error: '用户名不存在！' }
      } else {
        ctx.body = value[0].password === md5(String(password))
          ? {
            success: true,
            token: jsonwebtoken.sign({ name: userName }, jwtSecret, {
              expiresIn: '1d'
            })
          }
          : {
            success: false,
            error: '密码验证错误！'
          }
      }
    })
  }
}

module.exports = new LoginControllers()
