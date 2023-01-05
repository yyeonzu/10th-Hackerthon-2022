const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '03090418',
  database: 'pictus',
});

db.connect();

module.exports = db;
