const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'YES',
  database: 'tailor_shop'
});

// Error Handling Function
function handleError(err) {
  console.error('Error:', err);
}

// Connection End Function
function endConnection() {
  connection.end((err) => {
    if (err) {
      handleError(err);
    } else {
      console.log('Connection closed');
    }
  });
}

// Query Function
function query(sql, callback) {
  connection.query(sql, (err, rows) => {
    if (err) {
      handleError(err);
    } else {
      callback(rows);
    }
  });
}

connection.connect((err) => {
  if (err) {
    handleError(err);
  } else {
    console.log('Connected as id ' + connection.threadId);

    // Query Example
    query('SELECT * FROM employee', (rows) => {
      console.log(rows);
      // endConnection();
    });
  }
});

module.exports = connection;