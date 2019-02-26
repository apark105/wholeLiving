const express = require('express');
const router = express.Router(); 

var sql = require('./db');

router.get('/', (req, res) => {
    sql.query("SELECT * FROM c918_AP", (err, result) => {
        if(err){
            res.send(JSON.stringify({"status": 500, "error": err, "response": null})); 
            //If there is error, we send the error in the error section with 500 status
        } else {
            res.send(JSON.stringify({"status": 200, "error": null, "response": result}));
            //If there is no error, all is good and response is 200OK.
        }
      });
})

module.exports = router;