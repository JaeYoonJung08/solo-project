const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "jj15089552!",
  port: 3306,
  database: "solo-project",
});

module.exports = pool;