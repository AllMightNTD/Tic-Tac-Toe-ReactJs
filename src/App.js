import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { checkWin } from './components/actions';
import History from './components/actions/history';
function App() {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);
    const [matrix, setMatrix] = useState([]);
    const [move, setMove] = useState([]);
    const [player, setPlayer] = useState('X');

    // Check winner
    const [winningLength, setWinningLength] = useState(3);

    const handleRowsChange = (event) => {
        setRows(event.target.value);
    };

    const handleColsChange = (event) => {
        setCols(event.target.value);
    };
    const handleSubmitMatrix = () => {
        setMatrix(Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0)));
    };

    const HandleCellClick = (row, cell) => {
        console.log(row, cell);
        const newMove = [...move, { row, cell }];
        setMove(newMove);
        const newMatrix = [...matrix];
        if (newMatrix[row][cell] === 0) {
            newMatrix[row][cell] = player;
            setMatrix(newMatrix);
            const checkWinner = checkWin(row, cell, matrix, cols, rows, winningLength);
            if (checkWinner) {
                setTimeout(() => {
                    alert(matrix[row][cell] + ' đã win');
                    setPlayer('X');
                    setMatrix([]);
                    setMove([]);
                }, [500]);
            } else {
                setPlayer(player === 'X' ? 'O' : 'X');
            }
        }
    };
    console.log(matrix);

    useEffect(() => {
        if (rows < 10 || cols < 10) {
            setWinningLength(3);
        } else {
            setWinningLength(5);
        }
    }, [rows, cols]);

    const checkEmptyValues = () => {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === '') {
                    return true;
                }
            }
        }
        return false;
    };

    return (
        <div>
            <div>
                <label htmlFor="">Nhập số hàng</label>
                <input type="number" onChange={handleRowsChange} />
            </div>
            <div>
                <label htmlFor="">Nhập số cột</label>
                <input type="number" onChange={handleColsChange} />
            </div>
            <button type="submit" onClick={handleSubmitMatrix}>
                ADD
            </button>
            <table bordered>
                <tbody>
                    {matrix.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, colIndex) => (
                                <td key={colIndex} onClick={() => HandleCellClick(rowIndex, colIndex)}>
                                    {matrix[rowIndex][colIndex] === 0 ? '' : matrix[rowIndex][colIndex]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <div>
                    <History move={move} />
                </div>
            </table>
        </div>
    );
}

export default App;
