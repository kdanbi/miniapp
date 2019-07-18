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

app.get('/', (req, res) => {
    res.send('this is a test message');
})

app.post('/details/:place_id', (req, res) => {
    const place_id = req.params.place_id;

    axios.get(`https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyC2DtGQafS7ey_uIJHawxlOx1QrsGF55qs&place_id=${place_id}`)
        .then(result => res.json(result.data.result))
})
app.get('/getImage/:imageRef', (req, res) => {
    const imageRef = req.params.imageRef;

    axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${imageRef}key=AIzaSyC2DtGQafS7ey_uIJHawxlOx1QrsGF55qs`)
        .then(result => res.json(result.data.result))
})


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('server listening on 8080')
})