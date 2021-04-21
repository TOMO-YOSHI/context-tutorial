require('dotenv').config();

const promise_mysql = require('promise-mysql');

const connectionOption = {
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true
}

const db = promise_mysql.createPool(connectionOption);

module.exports = { db };