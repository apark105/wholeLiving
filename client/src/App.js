import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NatureCards from './natureCard';

const AUTH_TOKEN = '563492ad6f917000010000017c0775614843445eb8ffed013a5fac35'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      naturePhotos: []
    }
  }

  componentDidMount = async () => {
    await axios({
      method: 'get',
      url: "https://api.pexels.com/v1/search?query=mountain&per_page=16&page=1",
      headers: { 'Authorization': AUTH_TOKEN },
    }).then((resp) => {
      console.log('did it even get the stuff', resp.data.photos)
      this.setState({
        naturePhotos: resp.data.photos
      })
    })
  }


  render() {
    const { naturePhotos } = this.state;
    const renderCards = naturePhotos.map((photo, index) => {
      return (
        <NatureCards key={index} photo={photo} />
      )
    })
    return (
      <div className="container">
        <div className="row">
          {renderCards}
        </div>
        
      </div>
    );
  }
}

export default App;
