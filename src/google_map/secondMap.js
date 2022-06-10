import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
import { Link } from 'react-router-dom';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { address: '' ,
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        
        mapcenter:{
          initialZoom: 10,
          lat:49.2827291,
          lng:-123.1207375
    },

       
      }
   
    }
   
   
    handleChange = address => {
        this.setState({ address });
      };
     
      handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error));
      };
    render() {
      return (
          <div className="maps ">
          <Link to='/'>back to home</Link>
               <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

              <Map google={this.props.google}
         initialCenter={{
             lat:this.state.mapcenter.lat,
             lng:this.state.mapcenter.lng,
         }}
            >
          <Marker 
             position={{ lat:this.state.mapcenter.lat,
             lng:this.state.mapcenter.lng,
             }}
               
             
           />
   
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
          </div>
        
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyCKLsComzm7S8PCg21S6ZW9avU2JWDAvKY')
  })(MapContainer)

  //AIzaSyCKLsComzm7S8PCg21S6ZW9avU2JWDAvKY