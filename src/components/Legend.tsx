import React from "react";

import { FaCrown, FaLungs } from "react-icons/fa";

import { GiHeartOrgan } from "react-icons/gi";

import urinary from "../assets/urinary.png";
import excretory from "../assets/excretory.png";
import immunological from "../assets/immunological.png";
import "./Legend.css";

const Legend: React.FC = () => {
  return (
    <div className="legend">
      <h2>Legenda</h2>
      <ul>
        <li>
          <FaCrown /> <span>Coroa do rei Mallet </span>
        </li>
        <li>
          <GiHeartOrgan /> <span>sistema cardiovascular </span>
        </li>
        <li>
          <FaLungs /> <span>Sistema Respiratório </span>
        </li>
        <li>
          <img src={urinary} alt="Sistema urinário" />{" "}
          <span>Sistema urinário</span>
        </li>
        <li>
          <img src={excretory} alt="Sistema excretor" />{" "}
          <span>Sistema excretor</span>
        </li>
        <li>
          <img src={immunological} alt="Sistema imunológico" />{" "}
          <span>Sistema imunológico</span>
        </li>
      </ul>
    </div>
  );
};

export default Legend;
