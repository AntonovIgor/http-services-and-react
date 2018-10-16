import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <article className="map__card popup">
                <img src="img/avatars/user01.png" className="popup__avatar" width="70" height="70" alt="Аватар пользователя" />
                <button type="button" className="popup__close">Закрыть</button>
                <h3 className="popup__title">Уютное гнездышко для молодоженов</h3>
                <p className="popup__text popup__text--address">102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3</p>
                <p className="popup__text popup__text--price">5200&#x20bd;<span>/ночь</span></p>
                <h4 className="popup__type">Квартира</h4>
                <p className="popup__text popup__text--capacity">2 комнаты для 3 гостей</p>
                <p className="popup__text popup__text--time">Заезд после 14:00, выезд до 10:00</p>
                <ul className="popup__features">
                    <li className="popup__feature popup__feature--wifi"></li>
                    <li className="popup__feature popup__feature--dishwasher"></li>
                    <li className="popup__feature popup__feature--parking"></li>
                    <li className="popup__feature popup__feature--washer"></li>
                    <li className="popup__feature popup__feature--elevator"></li>
                    <li claclassNamess="popup__feature popup__feature--conditioner"></li>
                </ul>
                <p className="popup__description">Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.</p>
                <div className="popup__photos">
                    <img src="" className="popup__photo" width="45" height="40" alt="Фотография жилья" />
                </div>
        </article>
        );
    }
}