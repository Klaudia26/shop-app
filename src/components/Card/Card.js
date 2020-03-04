import React from 'react';
import img from '../../img/view.jpg';
import './Card.scss';

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={img} alt="view" className="image" />
      </div>
      <div className="wrapper">
        <div className="card__description">
          <p className="card__description--name">{card.title}</p>
        </div>
        <div className="card__price">
          <p className="card__price--value">
            {card.currencyFormat}
            {card.price}
          </p>
          <p className="card__price--sale">or 9 x$1.21</p>
        </div>
        <button className="card__btn">Add</button>
      </div>
    </div>
  );
};

export default Card;
