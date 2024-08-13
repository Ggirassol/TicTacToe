import "./App.css";
import { useState } from "react";
import Board from "./components/Board";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xTurn = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function goBack() {
    if (currentMove > 0) {
      setCurrentMove(currentMove - 1);
    }
  }

  function restart() {
    setCurrentMove(0)
  }

  function moves() {
    return (
      <div className="go-back-and-restart"> 
        <button className={currentMove === 0 ? "inactive" : "active"} onClick={() => restart()}>Restart</button>
        <button className={currentMove === 0 ? "inactive" : "active"} onClick={() => goBack()}>Go back</button>
      </div>
    );
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xTurn={xTurn} squares={currentSquares} onPlay={handlePlay} />
        <div className="game-info">
          <div>{moves()}</div>
        </div>
      </div>
    </div>
  );
}

export default Game;
