import React, { Component } from 'react';
import './App.css';
import axios from 'axios'; 
import InputInfo from './input';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      wholeFoods: [],
    }
  }

  componentDidMount = () => {
    axios.get("http://localhost:3001/wholeFoods").then( (resp) => {
      console.log(resp)
      this.setState({
        wholeFoods:resp.data.response
      })
    } )
  }


  getLatLng = (address) => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyD-NNZfs0n53D0caUB0M_ERLC2n9psGZfc`).then( (resp) => {
      debugger;
      console.log('what is the axios', resp.data.results[0].geometry.location)
    } ).catch(err => console.log(err))
  }

  render() {
    console.log(this.state.wholeFoods)
    return (
      <div className="App">
          <InputInfo submitAddress={this.getLatLng}/>
      </div>
    );
  }
}

export default App;
