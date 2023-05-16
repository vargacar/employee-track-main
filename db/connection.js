const mysql = require('mysql');

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
database: 'business',
password: 'your password',
});

connection.connect(function (err) {
  if(err) throw err;  
})
 
module.exports = connection;