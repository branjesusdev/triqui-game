import { useState } from "react";
import confetti from "canvas-confetti";

import "./App.css";
import Square from "./components/Square";
import WinnerModal from "./components/WinnerModal";

import { TURNS } from "./models/Turns";
import { checkToBoardFrom, checkEndGame } from "./logic/board";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  // null es que no hay ganador, false un empate
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index]) return;

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    const newBoard = [...board];
    newBoard[index] = turn;

    setTurn(newTurn);
    setBoard(newBoard);

    const newWinner = checkToBoardFrom(newBoard);

    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) setWinner(false); // check if game over
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setTurn(TURNS.X);
  };

  return (
    <>
      <main className="board">
        <h1 className="title">TRIQUI</h1>

        <section className="game">
          {board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            );
          })}
        </section>

        <section className="turn">
          <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
        </section>

        <WinnerModal
          handleResetGame={handleResetGame}
          winner={winner}
        ></WinnerModal>
      </main>
    </>
  );
}

export default App;
