const express = require('express'); 
const axios = require('axios');
const router = express.Router();


const latLng = axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=Brea,Ca&key=AIzaSyD-NNZfs0n53D0caUB0M_ERLC2n9psGZfc")
.then((resp) => {console.log('what is the axios resp',resp)})