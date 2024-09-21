// app.js
const express = require('express');
const app = express();
const port = 3000;
const api = require('./routes/employee/employee-routes');

app.use( api);

// app.get('/api/employee', (req, res) => {
//   res.send('Employee API endpoint!');
// });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});