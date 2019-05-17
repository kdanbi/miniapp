import React from 'react';
import '../App.scss';
<<<<<<< HEAD:mini-app/src/components/Main.js
import image from '../assets/hand.png';
=======
import axios from 'axios'

const baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';

>>>>>>> 5573f288891c18dcc3ee2f9555e743171b65d34e:client/mini-app/src/components/Main.js
class Main extends React.Component {

    getResults =(event)=>{
        event.preventDefault();
        axios.get(`http://localhost:8080/`)
            .then(result => console.log(result)
            )
        
    }
    render () {
        return (
            <section className="mainPage">
                <h1 className="mainPage__hero">Only if you have a date</h1>
                <form className="mainPage__form" onSubmit={this.getResults}>
                    <input className="mainPage__form--input" type="text" name="address" placeholder="Enter your location here"/>
                    <button className="mainPage__form--button" type="submit" name="button"><img src={image} alt="hand"/>RUB</button>
                </form>
            </section>
        )
    }
}

export default Main;