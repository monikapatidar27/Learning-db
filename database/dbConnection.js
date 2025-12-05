// const express = require("express")
// const mysql = require("mysql2")

// const sqlConnection = mysql.createConnection({
//     host:process.env.HOST,
//     user:process.env.USER,
//     password:process.env.PASSWORD,
//     database:process.env.DATABASE,
//     insecureAuth : true
// });

// module.exports = sqlConnection;
const Sequelize = require('sequelize');

const sqlConnection = new Sequelize(
    process.env.DATABASE, 
    process.env.USER, 
    process.env.PASSWORD, {
        dialect: 'mysql',
        host: process.env.HOST || 'localhost'
    }
);

module.exports = sqlConnection;


