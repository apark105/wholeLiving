import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import API_Key from './helper';
import KeyMarker from './marker'
import wholeFoods from './assets/wholefoods.png';
import faveSpot from './assets/favespot.png';
import {K_SIZE} from './hover.js';
import PlaceInfo from './placeInfo';



class GoogleMap extends Component {
    constructor(props) {
      super(props)
    
    }


    render() {
        console.log('google Maps', this.props)
        const wholeFoodLocation = this.props.wholeFoods.map((elem, index) => {
            return (
                <KeyMarker
                    key={index + 100}
                    lat={elem.lat}
                    lng={elem.lng}
                    text={
                        wholeFoods
                    }
                    alt={'Whole Foods'}
                />
            )
        })
        const keyLocation = this.props.keyLocation.map((elem, index) => {
            return (
                <KeyMarker
                    key={index}
                    lat={elem.geometry.location.lat}
                    lng={elem.geometry.location.lng}
                    text={faveSpot
                    }
                    alt={'Favorite Spot'}
                    // text={this.props.keywordSearch}
                />
            )
        })
        return (
            <>
            <div style={{ height: '90vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: API_Key }}
                    defaultCenter={this.props.currentLocation}
                    defaultZoom={10}
                    // hoverDistance={K_SIZE}
                >
                  {wholeFoodLocation}
                  {keyLocation}
                </GoogleMapReact>
            </div>
                {/* <PlaceInfo/> */}
            </>
        )
    }

}

export default GoogleMap; 