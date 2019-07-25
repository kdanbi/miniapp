import React from "react";
//import { Link } from "react-router-dom";
import "../App.scss";
//import image from "../assets/hand.png";
import axios from "axios";
import "./Main.scss";
import "./Result.scss";
import Result from './Result'
import MainMap from "./MainMap/MainMap";
let lat = "";
let lng = "";

class Main extends React.Component {
  state = {
    location: "",
    listOfRubs: [],
    display: false
  };


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
      this.setState({
        location: `${position.coords.latitude}, ${position.coords.longitude}`
      });
    });
    //console.log(this.location)
  }

  componentDidUpdate(prevProps, prevState) {
      if (this.state.location !== prevState.location) {
          axios
          .post(`https://whattheforkfrank.herokuapp.com/`, { location: this.state.location })
          .then(result => {
              this.setState({ listOfRubs: result.data })
              this.setState({ display: true })
              console.log(result.data)
            });
        } else {
            console.log("nope")
        }
  }
  render() {
    return (
      <section className="mainPage">
        {this.state.listOfRubs.length > 0 ? (
          <>
          <Result className="result-page" result={this.state.listOfRubs}/>
          {/* <Link
            to={{
              pathname: "/results",
              state: { result: this.state.listOfRubs }
            }}
          >
            <button onClick={this.displayResult}>View Result</button>
          </Link> */}
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
