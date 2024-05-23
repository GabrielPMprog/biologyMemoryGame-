import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaCrown, FaLungs } from "react-icons/fa";

import { GiHeartOrgan } from "react-icons/gi";

import "./App.css";
import Card from "./components/Card.tsx";
import Victory from "./components/Victory.tsx";
import About from "./components/About.tsx";
import Explanation from "./components/Explanation.tsx";
import Legend from "./components/Legend.tsx";

import urinary from "./assets/urinary.png";
import excretory from "./assets/excretory.png";
import immunological from "./assets/immunological.png";

interface CardData {
  id: number;
  type: string;
  icon?: React.ReactNode;
  text: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    type: "urinary",
    icon: <img src={urinary} alt="urinario" />,
    text: "Elimina as substâncias indesejadas e filtra o plasma, também responsável pela homeostase.",
  },
  {
    id: 2,
    type: "excretory",
    icon: <img src={excretory} alt="excretor" />,
    text: "Elimina as substâncias tóxicas em excesso por meio da produção da urina.",
  },
  {
    id: 3,
    type: "breathing",
    icon: <FaLungs className="icon" />,
    text: "Sua principal função é a troca gasosa.",
  },
  {
    id: 4,
    type: "cardiovascular",
    icon: <GiHeartOrgan className="icon" />,
    text: "Garante o transporte de sangue pelo corpo.",
  },
  {
    id: 5,
    type: "immunological",
    icon: <img src={immunological} alt="imunológico" />,
    text: "Previne danos, combate microrganismos, detecta patógenos e responde eficazmente.",
  },
  {
    id: 6,
    type: "king",
    icon: <FaCrown className="icon" />,
    text: "Rei Mallet, THE KING!",
  },
  {
    id: 7,
    type: "urinary",
    text: "Elimina as substâncias indesejadas e filtra o plasma, também responsável pela homeostase.",
  },
  {
    id: 8,
    type: "excretory",
    text: "Elimina as substâncias tóxicas em excesso por meio da produção da urina.",
  },
  { id: 9, type: "breathing", text: "Sua principal função é a troca gasosa." },
  {
    id: 10,
    type: "cardiovascular",
    text: "Garante o transporte de sangue pelo corpo.",
  },
  {
    id: 11,
    type: "immunological",
    text: "Previne danos, combate microrganismos, detecta patógenos e responde eficazmente.",
  },
  { id: 12, type: "king", text: "Rei Mallet, THE KING!" },
];

function App() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [gameWon, setGameWon] = useState<boolean>(false);

  useEffect(() => {
    const shuffledCards = shuffleCards(cardData);
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (matchedCards.length === cardData.length) {
      setGameWon(true);
    }
  }, [matchedCards]);

  const shuffleCards = (cards: CardData[]): CardData[] => {
    let shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2) return;
    setFlippedCards((prev) => [...prev, id]);

    if (flippedCards.length === 1) {
      const [first] = flippedCards;
      const second = id;
      const firstCard = cards.find((card) => card.id === first);
      const secondCard = cards.find((card) => card.id === second);

      if (firstCard && secondCard && firstCard.type === secondCard.type) {
        setMatchedCards((prev) => [...prev, first, second]);
      }

      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  const restartGame = () => {
    const shuffledCards = shuffleCards(cardData);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setGameWon(false);
  };

  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Jogo</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/explanation">Explicação</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              gameWon ? (
                <Victory onRestart={restartGame} />
              ) : (
                <>
                  <h1 className="title">Jogo da Memória</h1>
                  <div className="card-grid">
                    {cards.map((card) => (
                      <Card
                        key={card.id}
                        card={card}
                        isFlipped={
                          flippedCards.includes(card.id) ||
                          matchedCards.includes(card.id)
                        }
                        onClick={() => handleCardClick(card.id)}
                      />
                    ))}

                    <Legend />
                  </div>
                </>
              )
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/explanation" element={<Explanation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
