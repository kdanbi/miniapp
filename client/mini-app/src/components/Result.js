//import App from '../App';
import React from 'react';
import Places from "google-places-web";
import axios from 'axios'; 
Places.APIkeY = "AIzaSyC2DtGQafS7ey_uIJHawxlOx1QrsGF55qs";
//Places.debug = __DEV__; //boolean;

class Result extends React.Component {
    componentDidMount () {
        axios.get("")
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render () {
        return (
            ''
        )
    }
}

export default Result;