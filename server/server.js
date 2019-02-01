const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const PORT = process.env.PORT || 3001; 

const app = express(); 

app.use(cors());
// app.use(express.urlencoded)( {extended: false});
app.use(express.json());
// app.use(express.static());

app.get('/', (req, res) => {
    console.log('did it hit this?')
    res.send('<h1>Server is running!</h1>')
})

app.listen(PORT, () => {
    console.log('Server Running on PORT: ' + PORT); 
}).on('error', (err) => {
    console.log('Listen Error: You already have a server running on PORT: ' + PORT); 
});
