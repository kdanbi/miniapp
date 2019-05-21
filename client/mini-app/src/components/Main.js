import React from 'react';
import '../App.scss';
import image from '../assets/hand.png';
import axios from 'axios'

class Main extends React.Component {

    state = {
        location: ''
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({
                    location: `${position.coords.latitude}, ${position.coords.longitude}`
                })
            }
        )

    }

    getResults =(event)=>{
        event.preventDefault();

        axios.post(`http://localhost:8080`, {location: this.state.location})
            .then(result => console.log(result.data)
            )
    }

    getLocation=()=>{
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                alert('lat: ' + position.coords.latitude + ' longitude: ' + position.coords.longitude)
            }
        );
    }

    render () {
        return (
            <section className="mainPage">
                <h1 className="mainPage__hero">Only if you have a date</h1>
                <form className="mainPage__form" onSubmit={this.getResults}>
                    <input className="mainPage__form--input" type="text" name="address" placeholder="Enter your location here"/>
                    <button className="mainPage__form--button" type="submit" name="button"><img src={image} alt="hand"/>RUB</button>
                </form>
                <button onClick={this.getLocation}>Get Location</button>
            </section>
        )
    }
}
export default Main;