const express = require('express');
const router = express.Router();
const database = require('../../database');

router.get('/employee', (req, res) => {
    const sqlQuery = 'SELECT * FROM employee';
    database.query(sqlQuery, (err, result) => {
        if (err) {
            console.error('error ruuning query', err);
            res.status(500).send({message: 'Error running query'});
        }else{
            res.send(result);
        }
    });
});
module.exports = router;