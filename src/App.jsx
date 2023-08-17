import { useState } from "react";
import confetti from "canvas-confetti";

import "./App.css";
import Square from "./components/Square";
import WinnerModal from "./components/WinnerModal";
import InfoBoard from "./components/InfoBoard";
import RefreshBoard from "./components/refreshBoard";

import { TURNS } from "./models/Turns";
import { checkToBoardFrom, checkEndGame } from "./logic/board";
import { resetGameToStorage, saveGameToStorage, getKeyValueToStorage } from './logic/storage/index'

function App() {
  const [board, setBoard] = useState( () => {
    const boardFormStorage = getKeyValueToStorage({ key : 'board'});
    return boardFormStorage ? JSON.parse(boardFormStorage) : Array(9).fill(null)
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = getKeyValueToStorage({ key: 'turn'});
    return turnFromStorage ?? TURNS.X
  });
  const [squeareCheck, setSqueareCheck] = useState(() => {
    const squareCheckFromStorage = getKeyValueToStorage({key: 'squareCheckReset'})
    return squareCheckFromStorage ?? false
  });

  // null es que no hay ganador, false un empate
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index]) return;

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    const newBoard = [...board];
    newBoard[index] = turn;

    saveGameToStorage( { board: newBoard, turn: newTurn, squeareCheck } )
    setTurn(newTurn);
    setBoard(newBoard);
    setSqueareCheck(true)

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
    setSqueareCheck(false)
    resetGameToStorage()
  };

  const handleCloseWinner = () => {
    setWinner(null)
  }

  return (
    <>
      <main className="board">
        <InfoBoard></InfoBoard>

        <section className="content-game">
          <RefreshBoard 
            handleResetGame={handleResetGame} 
            squeareCheck={squeareCheck}></RefreshBoard>

          <aside className="game">
            {board.map((square, index) => {
              return (
                <Square key={index} index={index} updateBoard={updateBoard}>
                  {square}
                </Square>
              );
            })}
          </aside>
        </section>

        <section className="turn">
          <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
        </section>

        <WinnerModal
          handleResetGame={handleResetGame}
          winner={winner}
          handleCloseWinner={handleCloseWinner}
        ></WinnerModal>
      </main>
    </>
  );
}

export default App;
