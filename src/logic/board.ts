import { WINNER_COMBOS } from "../models/WinnerCombos";

export const checkToBoardFrom = (boardToCheck: Array<number>) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;

    if (
      boardToCheck[a] &&
      boardToCheck[a] == boardToCheck[b] &&
      boardToCheck[a] == boardToCheck[c]
    )
      return boardToCheck[a];
  }

  return null; // No hay ganador
};

export const checkEndGame = (newBoard) => {
  // Revisamos si hay empate
  return newBoard.every((square) => square !== null);
};

export const checkSquare = (newBoard) => {
  // Revisamos si existe alguno checkeado 
  return newBoard.every((square) => console.log);
};
