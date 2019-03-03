import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import './App.css';

const mapStyles = {
  width: '80%',
  height: '80%'
};

export class FineAFemme extends Component {
    render() {
        return (
          <div>
          <body>
            <div className="App">
                <header className = "App-header">
                <p>Find-A-Femme</p>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                     lat: -1.2884,
                     lng: 36.8233
                    }}
                  />
                </header>
            </div>
            </body>
            </div>




        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDHPclKWBWCitdPzcV29V-OpQ4YvQQ6k5A'
})(FineAFemme);
