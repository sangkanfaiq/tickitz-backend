//connect ke database
const mysql = require("mysql2");
const { host, user, password, database } = process.env;

const db = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database Connected");
  }
});

module.exports = db;
