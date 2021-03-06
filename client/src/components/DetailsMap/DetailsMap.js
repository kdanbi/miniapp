import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../../pages/Details/Details.scss'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class DetailsMap extends Component {
 
  render() {
    const {lat, lng, text, center} = this.props.map;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC2DtGQafS7ey_uIJHawxlOx1QrsGF55qs' }}
          defaultCenter={center}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={lat}
            lng={lng}
            text={text}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default DetailsMap;