import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class MainMap extends Component {
 
  render() {
    const {lat, lng, text} = this.props.map;
    const center = {lat, lng};
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '30vh', width: '50%' }}>
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
 
export default MainMap;