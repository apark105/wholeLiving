const express = require('express');
const router = express.Router();
const axios = require('axios');

var sql = require('./db');
var latitude = '33.916475';
var longitude = '-117.9002918'; 
var dist = '30';

var theQuery = `SELECT *,
                3956 * 2 * ASIN(SQRT(POWER(SIN((${latitude}-ABS(lat)) * PI()/180/2),2) + COS(${latitude} * PI()/180) * COS(ABS(lat) * PI()/180) * POWER(SIN((${longitude}-lng) * PI()/180/2),2))) AS distance
                FROM pxlintern.c918_AP AS loc
                WHERE lng BETWEEN (${longitude}-${dist} / ABS(COS(RADIANS(${latitude}))*69)) AND (${longitude}+${dist} / ABS(COS(RADIANS(${latitude})) * 69))
                AND lat BETWEEN (${latitude}-(${dist}/69)) AND (${latitude}+(${dist}/69))
                GROUP BY google_id
                HAVING distance < ${dist}
                ORDER BY distance ASC`


// var theOtherQuery = `SELECT *,
//                     3956 * 2 * ASIN(SQRT(POWER(SIN((${latitude}-ABS(lat)) * PI()/180/2),2) + COS(${latitude} * PI()/180 ) * COS(ABS(lat) * PI()/180) * POWER(SIN((${longitude} – lng) * PI()/180/2),2) )) AS distance
//                     FROM pxlintern.c918_AP 
//                     having distance < ${dist}
//                     ORDER BY distance limit 10`

router.get('/', (req, res) => {
    console.log('res', res)
    sql.query(theQuery, (err, result) => {
            if (err) {
                res.send(JSON.stringify({ "status": 500, "error": err, "response": null }));
                //If there is error, we send the error in the error section with 500 status
            } else {
                res.send(JSON.stringify({ "status": 200, "error": null, "response": result }));
                //If there is no error, all is good and response is 200OK.
            }
        });
})

router.get('/latLng', (req, res) => {
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=92821&key=AIzaSyD-NNZfs0n53D0caUB0M_ERLC2n9psGZfc")
    .then((resp) => {res.send({ "status": 200, "error": null, "response": resp })
})})

module.exports = router;