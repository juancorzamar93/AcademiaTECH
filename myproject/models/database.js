const mysql = require('mysql'); 
const util = require('util');

var pool = mysql.createPool({
    connectionLimit: 10,
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3306,
    USER: process.env.USER || 'root',
    PASSWORD: process.env.PASSWORD || '',
    DATABASE:process.env.DATABASE || 'exampletech',
});

pool.query = util.promisify(pool.query);

module.exports = pool;

/* var mysql = require('mysql');
var pool  = mysql.createPool({
  host     : 'example.org',
  user     : 'bob',
  password : 'secret',
  database : 'my_db'
});

pool.getConnection(function(err, connection) {
  // connected! (unless `err` is set)
}); */