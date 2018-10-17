import React, { Component } from 'react';
import Map from './components/Map';
import Card from './components/Card';
import NewOffer from './components/NewOffer';
import data from './data.js';

class App extends Component {
  state = {
    offers: [...data],
    isActive: false,
    card: {
      isActiveCard: false
    }
  }

  /**
   * Активация приложения. Клик по главному маркеру.
   */
  onMainPinClick = () => this.setState({ isActive: true });

  /**
   * Обработка клика по пину.
   */
  onPinClick = (data) => this.setState( { card: { isActiveCard: true, ...data }}); 

  /**
   * Закрытие карточки объявления.
   */
  onCloseCard = () => this.setState( { card: { ...this.state.card, isActiveCard: false } }); 
  
  render() {
    return (
      <div>
        <Map 
          isActive={this.state.isActive} 
          offers={this.state.offers} 
          onMainPinClick={this.onMainPinClick}
          onPinClick={this.onPinClick}
        />
        <Card {...this.state.card} onCloseCard={this.onCloseCard} />
        <NewOffer />
      </div>
    );
  }
}

export default App;
