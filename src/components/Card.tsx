import React from 'react';
import './Card.css';

interface CardProps {
  card: {
    id: number;
    type: string;
    icon?: JSX.Element;
    text: string;
  };
  isFlipped: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ card, isFlipped, onClick }) => {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-front">
        {card.icon ? card.icon : <p>{card.text}</p>}
      </div>
      <div className="card-back"></div>
    </div>
  );
};

export default Card;
