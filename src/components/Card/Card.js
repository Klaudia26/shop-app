import React from 'react';
import img from '../../img/view.jpg';
import './Card.scss';

const Card = () => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={img} alt="view" className="image" />
      </div>
      <div className="card__description">
        <p className="card__description--name">Cat Tee Black T-Shirt</p>
        <span></span>
      </div>
      <div className="card__price">
        <p className="card__price--value">$10.90</p>
        <p className="card__price--sale">or 9 x$1.21</p>
      </div>
      <button className="card__btn">Add</button>
    </div>
  );
};

export default Card;
