const mysql = require('mysql');
const Promise = require('bluebird');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

module.exports = db;