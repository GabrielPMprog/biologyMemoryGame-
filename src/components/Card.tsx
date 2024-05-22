import './Card.css';

function Card({ card, isFlipped, onClick }) {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-front">
        {card.icon ? card.icon : <p>{card.text}</p>}
      </div>
      <div className="card-back"></div>
    </div>
  );
}

export default Card;
