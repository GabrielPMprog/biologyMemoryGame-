import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaHeart, FaBrain, FaLungs, FaStar, FaSun, FaMoon } from 'react-icons/fa';
import './App.css';
import Card from './components/Card.tsx';
import Victory from './components/Victory.tsx';
import About from './components/About.tsx';
import Explanation from './components/Explanation.tsx';

interface CardData {
  id: number;
  type: string;
  icon?: JSX.Element;
  text: string;
}

const cardData: CardData[] = [
  { id: 1, type: 'heart', icon: <FaHeart />, text: 'Bombeia sangue pelo corpo.' },
  { id: 2, type: 'brain', icon: <FaBrain />, text: 'Controla o sistema nervoso.' },
  { id: 3, type: 'lungs', icon: <FaLungs />, text: 'Responsável pela respiração.' },
  { id: 4, type: 'star', icon: <FaStar />, text: 'Um corpo celeste brilhante.' },
  { id: 5, type: 'sun', icon: <FaSun />, text: 'Nossa estrela do dia.' },
  { id: 6, type: 'moon', icon: <FaMoon />, text: 'O satélite natural da Terra.' },
  { id: 7, type: 'heart', text: 'Bombeia sangue pelo corpo.' },
  { id: 8, type: 'brain', text: 'Controla o sistema nervoso.' },
  { id: 9, type: 'lungs', text: 'Responsável pela respiração.' },
  { id: 10, type: 'star', text: 'Um corpo celeste brilhante.' },
  { id: 11, type: 'sun', text: 'Nossa estrela do dia.' },
  { id: 12, type: 'moon', text: 'O satélite natural da Terra.' }
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
      const firstCard = cards.find(card => card.id === first);
      const secondCard = cards.find(card => card.id === second);

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
            <li><Link to="/">Jogo</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><Link to="/explanation">Explicação</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={
            gameWon ? (
              <Victory onRestart={restartGame} />
            ) : (
              <>
                <h1>Jogo da Memória</h1>
                <div className="card-grid">
                  {cards.map(card => (
                    <Card 
                      key={card.id} 
                      card={card} 
                      isFlipped={flippedCards.includes(card.id) || matchedCards.includes(card.id)}
                      onClick={() => handleCardClick(card.id)}
                    />
                  ))}
                </div>
              </>
            )
          } />
          <Route path="/about" element={<About />} />
          <Route path="/explanation" element={<Explanation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
