const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express(); 

app.listen(8080, console.log('server listening on 8080'));

app.use(cors());

app.get('/', (req, res) => {
    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.645665, -79.395369&rankby=distance&type=restaurant&key=AIzaSyC2DtGQafS7ey_uIJHawxlOx1QrsGF55qs')
        .then(result => res.json(result))
})