import React from 'react';
import Filters from './Filters';
import cn from 'classnames';
import Pin from '../components/Pin';

export default class Map extends React.Component {
    render() {
        return (
            <section className={cn('map', {'map--faded': !this.props.isActive})}>       
                <div className="map__pins">
                    <div className="map__overlay">
                    <h2 className="map__title">И снова Токио!</h2>
                </div>
                <button
                    onClick={this.props.onMainPinClick}
                    className="map__pin map__pin--main" 
                    style={{left: "570px", top: "375px"}}
                >
                    <img src="img/muffin-red.svg" width="40" height="44" draggable="false" alt="Метка объявления" />
                    <svg viewBox="0 0 70 70" width="156" height="156" aria-label="Метка для поиска жилья">
                        <defs>
                            <path d="M35,35m-23,0a23,23 0 1,1 46,0a23,23 0 1,1 -46,0" id="tophalf" />
                        </defs>
                        <ellipse cx="35" cy="35" rx="35" ry="35" fill="rgba(255, 86, 53, 0.7)" />
                        <text>
                            <textPath xlinkHref="#tophalf" startOffset="0">Поставь меня куда-нибудь</textPath>
                        </text>
                    </svg>
                </button>
                {this.props.offers.map(item => 
                    <Pin key={item.id} {...item} 
                        isActive={this.props.isActive} 
                        onPinClick={this.props.onPinClick} 
                    />)}
                {this.props.children}

                
            </div>

      
            <Filters />
    </section>
        );
    }
}