const express = require('express');
const router = express.Router();
const axios = require('axios');

var sql = require('./db');
let theQuery = ''

router.post('/infos', (req, res) =>{
    // console.log('where the body', req.body)
    let latitude = '' + req.body.lat
    let longitude = '' + req.body.lng
    let dist = '25'
    theQuery = `SELECT *,
            3956 * 2 * ASIN(SQRT(POWER(SIN((${latitude}-ABS(lat)) * PI()/180/2),2) + COS(${latitude} * PI()/180) * COS(ABS(lat) * PI()/180) * POWER(SIN((${longitude}-lng) * PI()/180/2),2))) AS distance
            FROM pxlintern.c918_AP AS loc
            WHERE lng BETWEEN (${longitude}-${dist} / ABS(COS(RADIANS(${latitude}))*69)) AND (${longitude}+${dist} / ABS(COS(RADIANS(${latitude})) * 69))
            AND lat BETWEEN (${latitude}-(${dist}/69)) AND (${latitude}+(${dist}/69))
            GROUP BY google_id
            HAVING distance < ${dist}
            ORDER BY distance ASC`
            
    res.send(req.body)
})

// console.log('before the query', latitude, longitude, dist)
// let theQuery = `SELECT *,
//                 3956 * 2 * ASIN(SQRT(POWER(SIN((${latitude}-ABS(lat)) * PI()/180/2),2) + COS(${latitude} * PI()/180) * COS(ABS(lat) * PI()/180) * POWER(SIN((${longitude}-lng) * PI()/180/2),2))) AS distance
//                 FROM pxlintern.c918_AP AS loc
//                 WHERE lng BETWEEN (${longitude}-${dist} / ABS(COS(RADIANS(${latitude}))*69)) AND (${longitude}+${dist} / ABS(COS(RADIANS(${latitude})) * 69))
//                 AND lat BETWEEN (${latitude}-(${dist}/69)) AND (${latitude}+(${dist}/69))
//                 GROUP BY google_id
//                 HAVING distance < ${dist}
//                 ORDER BY distance ASC`

router.get('/', (req, res) => {
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





module.exports = router;