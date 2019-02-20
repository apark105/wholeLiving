const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
var sql = require('./db');

const app = express();
// app.use(cors());



app.listen(PORT, () => {
    console.log('Listening to Port:', PORT);
})


app.get('/stuff', (req, res) => {
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


// conn.connect( (err) => {
//   if (err) throw err;
//   //Select all customers and return the result object:
//   conn.query("SELECT * FROM c918_AP", (err, result, fields) => {
//     if (err) throw err;
//     return result
//   });
// });

// // app.use(express.urlencoded)( {extended: false});
// app.use(express.json());
// // app.use(express.static());

// app.use(express.static(path.join(__dirname, '/public')));
