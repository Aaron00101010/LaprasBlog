const mysql = require('mysql')
const { databaseConnectConfig, databaseName } = require('../config/')

const poolConfig = Object.assign(databaseConnectConfig, databaseName)
const connectPool = mysql.createPool(poolConfig)

module.exports = function (sqlQuery) {
  return new Promise(function (resolve, reject) {
    connectPool.getConnection(function (err, conn) {
      conn.release()
      if (err) {
        reject(err)
      } else {
        conn.query(sqlQuery, (err, results) => {
          if (err) {
            reject(err)
          } else {
            resolve(results)
          }
        })
      }
    })
  })
}
