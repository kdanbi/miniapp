import React from 'react';
import '../App.scss';
import image from '../assets/hand.png';
class Main extends React.Component {
    render () {
        return (
            <section className="mainPage">
                <h1 className="mainPage__hero">Only if you have a date</h1>
                <form className="mainPage__form">
                    <input className="mainPage__form--input" type="text" name="address" placeholder="Enter your location here"/>
                    <button className="mainPage__form--button" type="submit" name="button"><img src={image} alt="hand"/>RUB</button>
                </form>
            </section>
        )
    }
}

export default Main;