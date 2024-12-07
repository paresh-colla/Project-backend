// app.js
const express = require('express');
const app = express();
const port = 3000;
const api = require('./routes/employee/employee-routes');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use( api);

// app.get('/api/employee', (req, res) => {
//   res.send('Employee API endpoint!');
// });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});