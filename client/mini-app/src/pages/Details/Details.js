import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import DetailsMap from "../../components/DetailsMap/DetailsMap";
import './Details.scss';
 

class Details extends Component {
  state = {
    data: [],
    location: {
        lat: '',
        lng: ''
    },
    loadMap: false,
    loadImage: false
  };

  loadMap=()=>{
    this.setState({loadMap: !this.state.loadMap})
  }
  loadImage=()=>{
    this.setState({loadImage: !this.state.loadImage})
  }

  componentDidMount() {
    axios
      .post(`http://localhost:8080/details/${this.props.match.params.place_id}`)
      .then(result => this.setState({ data: result.data, location:result.data.geometry.location}));
  }

  render() {
    const joint = this.state.data;
    const lat = this.state.location.lat;
    const lng = this.state.location.lng;
    const text = joint.name;

    return (
      <div className="result">
        <p className="result__card--name">{joint.name}</p>
        {joint.price_level ? (
          <p className="result__card--price">{`price level: ${
            joint.price_level
          }`}</p>
        ) : (
          <p className="result__card--price" />
        )}
        {joint.rating ? (
          <p className="result__card--rating">{`rating: ${joint.rating}`}</p>
        ) : (
          <p className="result__card--rating">rating unavailable</p>
        )}
        <p className="result__card--address">{joint.formatted_address}</p>
        <p className="result__card--phone">{`Phone Number: ${joint.international_phone_number}`}</p>
        {joint.website ? (<a href={joint.website} target="_blank">Visit web site</a>) : (
          <p className="result__card--price" />
        )}
        <button onClick={()=>this.loadMap()}>Load Map</button>
        {this.state.loadMap==true? (<div
          className="map-container"
          style={{ height: "30vh", width: "60%" }}
        >
          <DetailsMap map={{ lat: lat, lng: lng, text: text, center:{lat,lng} }}/>
        </div>): null}
      </div>
    );
  }
}

export default Details;
