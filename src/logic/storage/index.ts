
const locationSave = window.sessionStorage;

export const saveGameToStorage = ( { board, turn, squeareCheck } ) => {
    locationSave.setItem('turn', turn)
    locationSave.setItem('board', JSON.stringify(board))
    locationSave.setItem('squareCheckReset', squeareCheck)
} 

export const resetGameToStorage = () => {
    locationSave.removeItem('turn')
    locationSave.removeItem('board')
    locationSave.removeItem('squareCheckReset')
} 

export const getKeyValueToStorage = ( { key } ) => {
    return locationSave.getItem(key)
}