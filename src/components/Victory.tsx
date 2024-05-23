import "./Victory.css";

interface VictoryProps {
  onRestart: () => void;
}

const Victory: React.FC<VictoryProps> = ({ onRestart }) => {
  return (
    <div className="victory">
      <h1>Parabéns! Você venceu!</h1>
      <button onClick={onRestart}>Jogar Novamente</button>
    </div>
  );
};

export default Victory;
