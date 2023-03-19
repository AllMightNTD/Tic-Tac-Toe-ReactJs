export const checkWin = (row, col, matrix, cols, rows, winningLength) => {
    const value = matrix[row][col];
    console.log(value);
    let count = 1;
    // Mảng lưu đường đi đến chiến thắng
    let winningCells = [[row, col]];

    // check horizontally
    for (let i = col - 1; i >= 0 && matrix[row][i] === value; i--) {
        console.log(i);
        count++;
        // add giá trị vào mảng
        winningCells.push([row, i]);
    }
    for (let i = col + 1; i < cols && matrix[row][i] === value; i++) {
        count++;
        winningCells.push([row, i]);
    }
    if (count >= winningLength) {
        return { isWin: true, winningCells };
    }
    // check vertically
    count = 1;
    for (let i = row - 1; i >= 0 && matrix[i][col] === value; i--) {
        count++;
        winningCells.push([i, col]);
    }
    for (let i = row + 1; i < rows && matrix[i][col] === value; i++) {
        count++;
        winningCells.push([i, col]);
    }
    if (count >= winningLength) {
        return { isWin: true, winningCells };
    }

    // check diagonally (top-left to bottom-right)
    count = 1;
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0 && matrix[i][j] === value; i--, j--) {
        count++;
        winningCells.push([i, j]);
    }
    for (let i = row + 1, j = col + 1; i < rows && j < cols && matrix[i][j] === value; i++, j++) {
        count++;
        winningCells.push([i, j]);
    }
    if (count >= winningLength) {
        return { isWin: true, winningCells };
    }

    // check diagonally (top-right to bottom-left)
    count = 1;
    for (let i = row - 1, j = col + 1; i >= 0 && j < cols && matrix[i][j] === value; i--, j++) {
        count++;
        winningCells.push([i, j]);
    }
    for (let i = row + 1, j = col - 1; i < rows && j >= 0 && matrix[i][j] === value; i++, j--) {
        count++;
        winningCells.push([i, j]);
    }
    if (count >= winningLength) {
        return { isWin: true, winningCells };
    }

    return { isWin: false, winningCells };
};

export const CheckDraw = () => {};
