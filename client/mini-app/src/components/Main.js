import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import image from "../assets/hand.png";
import axios from "axios";
import "./Main.scss";
import MainMap from "./MainMap/MainMap";
let lat = "";
let lng = "";

class Main extends React.Component {
  state = {
    location: "",
    listOfRubs: [],
    display: false
  };

  locationField = React.createRef();

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
      return this.setState({
        location: `${position.coords.latitude}, ${position.coords.longitude}`
      });
    });
  }

  getResults = event => {
    event.preventDefault();

    axios
      .post(`http://localhost:8080`, { location: this.state.location })
      .then(result => this.setState({ listOfRubs: result.data }));

    this.locationField.current.address.value = this.state.location;
  };

  displayResult = () => {
    this.setState({ display: true });
  };

  render() {
    return (
      <section className="mainPage">
        <h1 className="mainPage__hero">Ready to RUB?</h1>
        <form
          ref={this.locationField}
          className="mainPage__form"
          onSubmit={this.getResults}
        >
          <input
            className="mainPage__form--input"
            type="text"
            name="address"
            placeholder="Enter your location here"
          />
          <button
            className="mainPage__form--button"
            type="submit"
            name="button"
          >
            <img className="mainPage__hand" src={image} alt="hand" />
          </button>
        </form>
        {this.state.listOfRubs.length > 0 ? (
          <>
          <Link
            to={{
              pathname: "/results",
              state: { result: this.state.listOfRubs }
            }}
          >
            <button onClick={this.displayResult}>View Result</button>
          </Link>
          <div
          className="map-container"
          style={{ height: "28vh", width: "60%" }}
        >
          <MainMap map={{ lat: lat, lng: lng, text: "MY LOCATION" }} />
        </div>
          </>
        ) : null}
      </section>
    );
  }
}
export default Main;
