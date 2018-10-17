import React from 'react';
import { AppartmentType } from '../constants';

export default class Card extends React.Component {    
    render() {        
        return (!this.props.isActiveCard ? null :
            <article className="map__card popup">
                <img 
                    src={this.props.author.avatar} 
                    className="popup__avatar" 
                    width="70" 
                    height="70" 
                    alt={this.props.offer.title}
                />
                <button
                    onClick={this.props.onCloseCard}
                    type="button"
                    className="popup__close">Закрыть
                </button>
                <h3 className="popup__title">{this.props.offer.title}</h3>
                <p className="popup__text popup__text--address">{this.props.offer.address}</p>
                <p className="popup__text popup__text--price">{this.props.offer.price}&#x20bd;<span>/ночь</span></p>
                <h4 className="popup__type">{AppartmentType[this.props.offer.type]}</h4>
                <p className="popup__text popup__text--capacity">{this.props.offer.rooms} комнаты для {this.props.offer.guests} гостей</p>
                <p className="popup__text popup__text--time">Заезд после {this.props.offer.checkin}, выезд до {this.props.offer.checkout}</p>
                <ul className="popup__features">
                    {this.props.offer.features.map((item, index) =>
                        <li 
                            key={index} 
                            className={`popup__feature popup__feature--${item}`}>                            
                        </li>)}
                   
                </ul>
                <p className="popup__description">{this.props.offer.description}</p>
                <div className="popup__photos">
                    
                </div>
        </article>
        );
    }
}