import Square from "./Square";

export default function WinnerModal({ winner, handleResetGame, handleCloseWinner }) {
  if (winner === null) return null;

  const winnerText = winner !== false ? "Ganó:" : "Empate";

  return (
    <section className="winner">
      <div className="content-winner">
        <header>
          <h1>{winnerText}</h1>
        </header>

        <article>{winner && <Square>{winner}</Square>}</article>

        <footer>
          <button className="newGame" onClick={handleResetGame}>Empezar de nuevo</button>
          <button className="viewGame" onClick={handleCloseWinner}>Ver resultado</button>
        </footer>
      </div>
    </section>
  );
}
