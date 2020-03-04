import React from 'react';
import Card from '../Card/Card';
import './CardList.scss';

const CardList = (props) => {
  return (
    <>
      <div className="cardList">
        <ul className="cardList__list">
          {props.state.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </ul>
      </div>
    </>
  );
};
export default CardList;
