const express = require('express');
const axios = require('axios');
const router = express.Router();

module.exports = (app, dB) => {
    app.post("/googleTextSearch", (req, res) => {
        // console.log('server data:', req.body.data)
        let query = req.body.data.query;
        let fields = req.body.data.fields;
        let key = req.body.data.key;
        let location = req.body.data.location;
        axios.get("https://maps.googleapis.com/maps/api/place/textsearch/json?",
            {
                params: {
                    query: query,
                    fields: fields,
                    key: key,
                    location: location,
                    radius: '30000'
                }
            }
        ).then( (resp) => {
            
            // console.log('what is the text Search resp',resp.data.results)
            res.send(JSON.stringify({ "status": 200, "error": null, "response": resp.data.results }));
        } )

    })
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