import React from 'react';
import Card from '../Card/Card';
import './CardList.scss';

const CardList = (props) => {
  return (
    <>
      <div className="cardList">
        <ul className="cardList__list">
          {props.state.map((card) => {
            console.log('odp', card);
            return <Card card={card} />;
          })}
        </ul>
      </div>
    </>
  );
};
export default CardList;
