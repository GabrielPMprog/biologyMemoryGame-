import React from 'react';
import { FaHeart, FaBrain, FaLungs, FaStar, FaSun, FaMoon } from 'react-icons/fa';
import urinary from "../assets/urinary.png";
import excretory from "../assets/excretory.png";
import './Legend.css';

const Legend: React.FC = () => {
  return (
    <div className="legend">
      <h2>Legenda</h2>
      <ul>
        <li><FaHeart /> <span>Heart - Bombeia sangue pelo corpo.</span></li>
        <li><FaBrain /> <span>Brain - Controla o sistema nervoso.</span></li>
        <li><FaLungs /> <span>Lungs - Responsável pela respiração.</span></li>
        <li><FaStar /> <span>Star - Um corpo celeste brilhante.</span></li>
        <li><FaSun /> <span>Sun - Nossa estrela do dia.</span></li>
        <li><FaMoon /> <span>Moon - O satélite natural da Terra.</span></li>
        <li><img src={urinary} alt="Heart" /> <span>Heart Image - Bombeia sangue pelo corpo.</span></li>
        <li><img src={excretory} alt="Brain" /> <span>Brain Image - Controla o sistema nervoso.</span></li>
        <li><img src={excretory} alt="Lungs" /> <span>Lungs Image - Responsável pela respiração.</span></li>
      </ul>
    </div>
  );
};

export default Legend;
