import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../../styles/Map/locationMap.css';

class LocationMap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stores: [
                {lat: 7.149449, lng: 80.464733 },
                {latitude: 7.151562, longitude: 80.464266},
                {latitude: 7.157444, longitude: 80.462651},
                {latitude: 7.164959, longitude: 80.459559},
                {latitude: 7.142881, longitude: 80.468169},
                {latitude: 7.189783, longitude: 80.455974},
                ]
        }
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
                           onClick={() => console.log("You clicked me!")} />
        })
    }

    render() {

        const mapStyles = {
            width: '90%',
            height: '100%'
        };

        return (
            <div className='location-map-wrapper'>
                <Map
                    google={this.props.google}
                    zoom={12}
                    style={mapStyles}
                    initialCenter={{ lat: 7.157273, lng: 80.462692}}
                >
                    {this.displayMarkers()}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCRwNlI_sNXLentu4CKtKC52QlJI6hgdHE'
})(LocationMap);
