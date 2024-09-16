const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root@localhost',
  password: '123456',
  database: 'tailor_shop'
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting:', err);
    return;
  }
  console.log('connected as id ' + connection.threadId);

  connection.query('SELECT * FROM your_table', (err, rows) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(rows);

    connection.end((err) => {
      if (err) {
        console.error('error closing connection:', err);
        return;
      }
      console.log('connection closed');
    });
  });
});