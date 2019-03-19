const express = require('express');
// const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const address = require('./address');

const app = express();

app.use(cors());


// app.use( (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use('/wholeFoods', address);

app.listen(PORT, () => {
    console.log('Listening to Port:', PORT);
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
