import './Square.css'

export default function Square ({ children, updateBoard, index, isSelected })  {

    const className = `square ${ isSelected ? 'isSelected' : '' }`
    const handleClick = () => {
        if( updateBoard )
            updateBoard(index)
    }

    return (
        <div onClick={handleClick} className={className}>
            { children }
        </div>
    )
} 