import React, { Component } from 'react';
import Map from './components/Map';
import Card from './components/Card';
import NewOffer from './components/NewOffer';
import { loadOffers } from './services/api';

class App extends Component {
  state = {
    offers: [],
    isActive: false,
    card: {
      isActiveCard: false
    }
  }

  /**
   * После монтирования компонента выполняем
   * запрос на получение данных.
   */
  componentDidMount() {
    loadOffers()
      .then(response => this.setState({ offers: [...response.data] }))
      .catch(err => console.error('Произошла ошибка получения данных с сервера', err));  
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
        >
          <Card {...this.state.card} onCloseCard={this.onCloseCard} />
        </Map>
        
        <NewOffer isActive={this.state.isActive} />
      </div>
    );
  }
}

export default App;
