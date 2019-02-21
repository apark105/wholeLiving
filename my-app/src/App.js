import React, { Component } from 'react';
import './App.css';
import axios from 'axios'; 


class App extends Component {


  componentDidMount = () => {
    axios.get("http://localhost:3001/stuff").then( (resp) => {
      console.log(resp)
    } )
  }

  // componentDidMount = () => {
  //   axios.get("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=whole%20foods%20market&inputtype=textquery&fields=formatted_address,name,icon,geometry&locationbias=point:34.9592,116.419&key=AIzaSyD-NNZfs0n53D0caUB0M_ERLC2n9psGZfc")
  //   .then( (resp)=>{
  //     console.log(resp)
  //   } )
  //   axios.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=whole%20foods%20market+in+california&fields=formatted_address,name,icon,geometry&key=AIzaSyD-NNZfs0n53D0caUB0M_ERLC2n9psGZfc")
  //   .then( (resp)=>{
  //     console.log(resp)
  //   } )
  // }

  render() {
    return (
      <div className="App">
          Practice React
      </div>
    );
  }
}

export default App;
