import React, { Component } from 'react';
import axios from 'axios'; 
import InputInfo from './input';
import API_KEY from './helper';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      wholeFoods: [],
      latLng: {},
      keywordSearch: '',
      keyLocation: []
    }
  }

  componentDidMount = () => {
  }


  getLatLng = async (address, location) => {

    var parseWhiteSpaceLocation = location.split(' ').join('+');

    await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyD-NNZfs0n53D0caUB0M_ERLC2n9psGZfc`).then( (resp) => {
      // console.log('what is the axios', resp.data.results[0].geometry.location)
      this.setState({
        latLng: resp.data.results[0].geometry.location,
        keywordSearch: parseWhiteSpaceLocation
      })
    } ).catch(err => console.log(err))

    this.sendLatLngDB();
  }

  sendLatLngDB = async () => {
    const { latLng } = this.state;
    await axios({
      "async": true,
      "crossDomain": true,
      method: 'post',
      url: 'http://localhost:3001/wholeFoods/infos',
      data: latLng,
      dataType: JSON,
      headers: {
          'Content-Type': 'application/json',
          "cache-control": "no-cache",
      }
    })
    this.getWholeFoods();
  }

  getWholeFoods = async () => {
   await axios.get("http://localhost:3001/wholeFoods").then( (resp) => {
        console.log(resp)
        this.setState({
          wholeFoods:resp.data.response
        })
      } )
      this.getGoogleSearch();
    }

  getGoogleSearch = async ()=>{
    const {latLng, keywordSearch} = this.state
   await axios.post("http://localhost:3001/googleTextSearch", 
      {
        data: {
          query: keywordSearch,
          fields: 'formatted_address,name,geometry',
          key: API_KEY,
          location: `${latLng.lat}, ${latLng.lng}`
        }, 
        headers: {
          'Content-Type': 'application/json',
          "cache-control": "no-cache",
      }
      }
    ).then( (resp) => {
      this.setState({
        keyLocation: resp.data.response
      })
      console.log('here is the resp', resp)})
  }

  render() {
    console.log('keyword', this.state.keywordSearch);
    console.log('what is the wholeFoods state and keylocation state', this.state.wholeFoods, this.state.keyLocation)
    return (
      <div className="App">
          <InputInfo submitAddress={this.getLatLng}/>
      </div>
    );
  }
}

export default App;
