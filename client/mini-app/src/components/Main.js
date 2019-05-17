import React from 'react';
import '../App.scss';
import axios from 'axios'

const baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';

class Main extends React.Component {

    getResults =(event)=>{
        event.preventDefault();
        const location = event.target.address.value;

        axios.get(`${baseUrl}location=${location}&rankby=distance&type=restaurant&key=AIzaSyC2DtGQafS7ey_uIJHawxlOx1QrsGF55qs`)
            .then(result => console.log(result)
            )
        
    }
    render () {
        return (
            <section className="mainPage">
                <h1 className="mainPage__hero">Only if you have a date</h1>
                <form className="mainPage__form" onSubmit={this.getResults}>
                    <input className="mainPage__form--input" type="text" name="address" placeholder="Enter your location here"/>
                    <button className="mainPage__form--button" type="submit" name="button">RUB</button>
                </form>
            </section>
        )
    }
}

export default Main;