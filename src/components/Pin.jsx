import React from 'react';

export default class Pin extends React.Component {
    render() {
        return (
            <button 
                type="button"
                className="map__pin" 
                style={ {left: "200px", top: "400px" }}>
                    <img src="img/avatars/user07.png" 
                        width="40" 
                        height="40" 
                        draggable="false"
                        alt="Метка объявления" />
            </button>
        );
    }
}