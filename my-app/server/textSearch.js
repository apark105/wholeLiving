const express = require('express'); 
const axios = require('axios');
const router = express.Router();

module.exports = (app, dB) => { 
    app.post("/googleTextSearch", (req, res)=>{
        console.log(req.body)
        let query = '';
        let fields = '';
        let key = '';
        let location = '';
        // axios.post("https://maps.googleapis.com/maps/api/place/textsearch/json?",
        // )

    })  
    
    //  {
    //     params: {
    //         query: 'rockclimbing+gym',
    //         fields: 'formatted_address,name,geometry',
    //         key: 'AIzaSyD-NNZfs0n53D0caUB0M_ERLC2n9psGZfc',
    //         location: '33.9316733, -117.8604472'
    //       }
    // })
 }  


// router.get( '/', (req, res) =>{
//     axios.get("https://maps.googleapis.com/maps/api/place/textsearch/json?", { 
//         params: {
//             query: 'rockclimbing+gym',
//             fields: 'formatted_address,name,geometry',
//             key: 'AIzaSyD-NNZfs0n53D0caUB0M_ERLC2n9psGZfc',
//             location: '33.9316733, -117.8604472'
//           }
//         }).then((resp) => {console.log('what is the text Search resp',resp)})
// }) 


// module.exports = router;