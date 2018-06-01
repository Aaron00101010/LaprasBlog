const mysql = require('mysql')
const fs = require('fs')
const path = require('path')

const { databaseConnectConfig, databaseName } = require('../config/')

const connection = mysql.createConnection(databaseConnectConfig)
const sqlFileSource = fs.readFileSync(
  path.resolve(__dirname, '..', './sql/blog.sql'),
  'utf-8'
)

connection.connect(err => err && console.log(err))

connection.query(
  `CREATE DATABASE IF NOT EXISTS ${databaseName.database}`,
  err => {
    connection.end(err => err && console.log(err))
    if (err) {
      console.log(err)
    } else {
      Object.assign(databaseConnectConfig, databaseName)
      const conn = mysql.createConnection(databaseConnectConfig)
      conn.connect()
      conn.query(sqlFileSource, err => {
        if (err) {
          console.log(err)
        } else {
          console.log('init database success!')
        }
      })
    }
  }
)
