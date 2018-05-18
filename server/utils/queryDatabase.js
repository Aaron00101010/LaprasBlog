const mysql = require('mysql');
const { databaseConnectConfig, databaseName } = require('../config/');

const poolConfig = Object.assign(databaseConnectConfig, databaseName);
const connectPool = mysql.createPool(databaseConnectConfig);

module.exports = function(sqlQuery) {
  return new Promise(function(reslove, reject) {
    connectPool.getConnection(function(err, conn) {
      conn.release();
      if (err) {
        reject(err);
      } else {
        conn.query(sqlQuery, (err, results) => {
          if (err) {
            reject(err);
          } else {
            reslove(results);
          }
        });
      }
    });
  });
};
