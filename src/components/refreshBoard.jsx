export default function RefreshBoard({ squeareCheck, handleResetGame }) {
    if (!squeareCheck) return null;

    return(
        <svg 
            onClick={handleResetGame}
            className="icon-board-refresh" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
            strokeWidth="2" 
            stroke="currentColor" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
            <title>Reiniciar</title>
        </svg>
    )

}