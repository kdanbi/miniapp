import React from "react";
import "../App.scss";
import axios from "axios";
import "./Main.scss";
import "./Result.scss";
import Result from './Result'
import MainMap from "./MainMap/MainMap";
import guy from "../assets/guy.png";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyC2DtGQafS7ey_uIJHawxlOx1QrsGF55qs");

Geocode.enableDebug();

let lat = "";
let lng = "";


class Main extends React.Component {
    state = {
        location: "",
        listOfRubs: [],
        filteredRubs: [],
        display: false
    };

    myAddress = React.createRef();
    filterForm = React.createRef();

    loadResult=()=>{
        Geocode.fromAddress(this.myAddress.current.value).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                this.setState({
                    location: `${lat}, ${lng}`
                });
                console.log(lat, lng);
            },
            error => {
                console.error(error);
            }
            );
            this.myRef = React.createRef();
            console.log(this.myRef)
    }

    filterResult =(event)=>{
        event.preventDefault();
        const myForm = this.filterForm;
        const rating = Number(myForm.current[1].value);
        const priceLevel = Number(myForm.current[0].value);
        //const oldList = this.state.listOfRubs;
        this.setState({listOfRubs: this.state.listOfRubs.filter(item => (item.rating>= rating && item.price_level >= priceLevel))});
        
    }

  componentDidUpdate(prevProps, prevState) {
      if (this.state.location !== prevState.location) {
          axios
          .post(`https://whattheforkfrank.herokuapp.com/`, { location: this.state.location })
          .then(result => {
              this.setState({ listOfRubs: result.data })
              this.setState({ display: true })
              console.log(this.state.listOfRubs)
            });
        } else {
            console.log("nope")
        }
  }
  render() {
    return (
      <section className="mainPage">
            <div className="filter-and-button">
                <img className="guy "src={guy} alt="guy"/>
                    <input ref={this.myAddress} type="text" name="address" placeholder="Enter your address"/>
                    <button className="loadButton btn btn--stripe btn--radius" onClick={this.loadResult}>Find NOW</button>
                    <form ref={this.filterForm} onSubmit={this.filterResult}>
                        <input type="text" name="priceLevel" placeholder="price level (1 - 4)"/>
                        <label htmlFor="price-level"></label>
                        <input type="text" name="rating" placeholder="rating (1 - 4)"/>
                        <label htmlFor="rating"></label>
                        <button className="loadButton btn btn--stripe btn--radius" type="submit">Filter</button>
                    </form>
            </div>
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
