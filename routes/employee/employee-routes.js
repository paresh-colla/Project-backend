const express = require('express');
const router = express.Router();
const database = require('../../database');

router.get('/api/employee', async (req, res) => {
    const query = 'SELECT * FROM employee';
    database.query(query, (err, result) => {
        if (err) {
            console.error('error ruuning query', err);
            res.status(500).send({message: 'Error running query'});
        }else{
            res.send(result);
        }
    })
  });
module.exports = router;