import React, { Component } from 'react';
import Map from './components/Map';
import NewOffer from './components/NewOffer';
import data from './data.js';

class App extends Component {
  state = {
    offers: [...data],
    isActive: false
  }

  /**
   * Активация приложения. Клик по главному маркеру.
   */
  onMainPinClick = (evt) => this.setState({ isActive: true });
  
  render() {
    return (
      <div>
        <Map 
          isActive={this.state.isActive} 
          offers={this.state.offers} 
          onMainPinClick={this.onMainPinClick}
        />
        <NewOffer />
      </div>
    );
  }
}

export default App;
