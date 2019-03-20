import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import API_Key from './helper';
import KeyMarker from './marker'

class GoogleMap extends Component {

    render() {
        console.log('google Maps', this.props)
        const wholeFoodLocation = this.props.wholeFoods.map((elem, key) => {
            return (
                <KeyMarker
                    lat={elem.lat}
                    lng={elem.lng}
                    text={'Whole Foods'}
                />
            )
        })
        const keyLocation = this.props.keyLocation.map((elem, key) => {
            return (
                <KeyMarker
                    lat={elem.geometry.location.lat}
                    lng={elem.geometry.location.lng}
                    text={'Fave Spot'}
                    // text={this.props.keywordSearch}
                />
            )
        })
        return (
            <div style={{ height: '90vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: API_Key }}
                    defaultCenter={this.props.currentLocation}
                    defaultZoom={11}
                >
                  {wholeFoodLocation}
                  {keyLocation}
                </GoogleMapReact>
            </div>
        )
    }

}

export default GoogleMap; 