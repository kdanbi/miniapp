const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express(); 
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({extended: false}));


app.post('/', (req, res) => {
    const location = req.body.location;
   
    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&rankby=distance&type=restaurant&key=AIzaSyC2DtGQafS7ey_uIJHawxlOx1QrsGF55qs`)
    .then(result => res.json((result.data.results)))
})

app.listen(8080, console.log('server listening on 8080'));