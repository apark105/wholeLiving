const express = require('express');
// const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const address = require('./address');
var bodyParser = require('body-parser');

const db = require('./db')

const app = express();

// app.use(express.static(__dirname + '/html'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());
// const urlencodedParser = bodyParser.urlencoded({ extended: false })



// app.post('/wholeFoods/infos', (req, res) =>{
//     console.log('where the body', req.body.name)
//     res.send(req.body.name )
// })

require('./textSearch')(app, db)
app.use('/wholeFoods', address)

// require('./address')(app, db)
// app.use('/wholeFoods',urlencodedParser, address);


// app.post('/wholeFoods/info', urlencodedParser, (req,resp) => {
//     console.log('did I get a resp?', req.body)

//     resp.send(JSON.stringify({ "status": 200, "error": null, "response": req.body }))
// })

app.listen(PORT, () => {
    console.log('Listening to Port:', PORT);
})


