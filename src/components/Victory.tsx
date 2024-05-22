import React from 'react';
import './Victory.css';

function Victory({ onRestart }) {
  return (
    <div className="victory">
      <h1>Parabéns! Você venceu!</h1>
      <button onClick={onRestart}>Jogar Novamente</button>
    </div>
  );
}

export default Victory; 