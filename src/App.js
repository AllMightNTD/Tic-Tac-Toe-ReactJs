import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
    let board = ['', '', '', '', '', '', '', '', ''];
    const [cells, setCells] = useState(board);
    // Lưu giá trị đánh
    const [player, setPlayer] = useState('X');

    function handleCellClick(index) {
        // Gía trị các ô
        const newBoard = [...cells];
        if (newBoard[index] === '') {
            newBoard[index] = player;
            setCells(newBoard);
            console.log(cells);
            setPlayer(player === 'X' ? 'O' : 'X');
        }
    }
    useEffect(() => {
        const checkDraw = cells.every((cell) => cell !== '');
        if (checkDraw) {
            setTimeout(() => {
                alert('Game is draw!');
                setCells(board);
            }, 500);
        }
    }, [cells]);
    return (
        <div className="board">
            {cells.map((cell, index) => (
                <div className="cell" key={index} onClick={() => handleCellClick(index)}>
                    {cell}
                </div>
            ))}
        </div>
    );
}

export default App;
