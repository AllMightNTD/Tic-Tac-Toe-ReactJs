import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { checkWin } from './components/actions';
import History from './components/actions/history';
function App() {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);

    // State ma trận 2 chiều
    const [matrix, setMatrix] = useState([]);

    // state lưu lịch sử đi
    const [move, setMove] = useState([]);
    const [player, setPlayer] = useState('X');

    // State lưu đường đi đến chiến thắng
    const [winningPath, setWinningPath] = useState([]);

    // Check winner
    const [winningLength, setWinningLength] = useState(3);

    // Set hàng
    const handleRowsChange = (event) => {
        setRows(event.target.value);
    };

    // Set cột
    const handleColsChange = (event) => {
        setCols(event.target.value);
    };
    const handleSubmitMatrix = () => {
        setMatrix(Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0)));
        setMove([]);
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
            console.log(checkWinner);
            if (checkWinner.isWin) {
                console.log(row, cell);
                setWinningPath(checkWinner.winningCells);
                setTimeout(() => {
                    alert(matrix[row][cell] + ' đã win');
                    setPlayer('X');
                    setWinningPath([]);
                    setMatrix([]);
                    setMove([]);
                }, [500]);
            } else if (matrix.every((row) => row.every((val) => val !== 0))) {
                setTimeout(() => {
                    alert('2 đội Hòa Nhau');
                    setPlayer('X');
                    setWinningPath([]);
                    setMatrix([]);
                    setMove([]);
                }, [500]);
            } else {
                setPlayer(player === 'X' ? 'O' : 'X');
            }
        }
    };
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
    console.log(winningPath);
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
                                <td
                                    key={colIndex}
                                    style={{
                                        // Kiểm tra đường đi đến chiến thắng có chứa chỉ mục vị trí chiến thắng hay không
                                        backgroundColor: winningPath.some(([r, c]) => r === rowIndex && c === colIndex)
                                            ? 'yellow'
                                            : 'white',
                                    }}
                                    onClick={() => HandleCellClick(rowIndex, colIndex)}
                                >
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
