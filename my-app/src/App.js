import React, { Component } from 'react';
import './App.css';
import axios from 'axios'; 
import InputInfo from './input';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      wholeFoods: [],
      latLng: {}
    }
  }

  componentDidMount = () => {
  
    this.getGoogleSearch();
    // this.sendLatLngDB();

  }


  getLatLng = async (address) => {
    await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyD-NNZfs0n53D0caUB0M_ERLC2n9psGZfc`).then( (resp) => {
      console.log('what is the axios', resp.data.results[0].geometry.location)
      this.setState({
        latLng: resp.data.results[0].geometry.location,
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
    }).then( (resp) => {console.log(resp)})
    this.getWholeFoods();
  }

  getGoogleSearch =()=>{
    axios.post("http://localhost:3001/googleTextSearch", 
      {
        data: {
          query: 'rockclimbing+gym',
          fields: 'formatted_address,name,geometry',
          key: '',
          location: '33.9316733, -117.8604472'
        }, 
      }
    ).then( (resp) => {
      console.log('here is the resp', resp.data.response['lng'])})
  }

  getWholeFoods = () => {
  axios.get("http://localhost:3001/wholeFoods").then( (resp) => {
      console.log(resp)
      this.setState({
        wholeFoods:resp.data.response
      })
    } )
  }

  render() {
    console.log(this.state.wholeFoods)
    console.log('what is lat/lng', this.state.latLng);
    return (
      <div className="App">
          <InputInfo submitAddress={this.getLatLng}/>
      </div>
    );
  }
}

export default App;
