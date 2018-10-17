import React from 'react';

export default class Pin extends React.Component {
    onPinClick = () => {        
        this.props.onPinClick(this.props);
    }

    render() {
        return ( !this.props.isActive ? null :
            <button
                onClick={this.onPinClick}
                type="button"
                className="map__pin" 
                style={ {left: `${this.props.location.x}px`, top: `${this.props.location.y}px` }}>
                    <img src={this.props.author.avatar} 
                        width="40" 
                        height="40" 
                        draggable="false"
                        alt={this.props.offer.title} />
            </button>
        );
    }
}