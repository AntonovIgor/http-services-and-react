import React, { Component } from 'react';
import Map from './components/Map';
import NewOffer from './components/NewOffer';

class App extends Component {
  state = {
    offers: []
  }
  
  render() {
    return (
      <div>
        <Map />
        <NewOffer />
      </div>
    );
  }
}

export default App;
