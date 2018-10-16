import React from 'react';

export default () => {
    return (
        <div className="error">
            <p className="error__message">Ошибка загрузки объявления</p>
            <button className="error__button" href="#">Попробовать снова</button>
        </div>
    );
}
