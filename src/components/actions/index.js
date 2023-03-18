export const checkWin = (row, col, matrix, cols, rows, winningLength) => {
    const value = matrix[row][col];
    console.log(value);
    let count = 1;

    // check horizontally
    for (let i = col - 1; i >= 0 && matrix[row][i] === value; i--) {
        console.log(i);
        count++;
    }
    for (let i = col + 1; i < cols && matrix[row][i] === value; i++) {
        count++;
    }
    if (count >= winningLength) {
        return true;
    }
    // check vertically
    count = 1;
    for (let i = row - 1; i >= 0 && matrix[i][col] === value; i--) {
        count++;
    }
    for (let i = row + 1; i < rows && matrix[i][col] === value; i++) {
        count++;
    }
    if (count >= winningLength) {
        return true;
    }

    // check diagonally (top-left to bottom-right)
    count = 1;
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0 && matrix[i][j] === value; i--, j--) {
        count++;
    }
    for (let i = row + 1, j = col + 1; i < rows && j < cols && matrix[i][j] === value; i++, j++) {
        count++;
    }
    if (count >= winningLength) {
        return true;
    }

    // check diagonally (top-right to bottom-left)
    count = 1;
    for (let i = row - 1, j = col + 1; i >= 0 && j < cols && matrix[i][j] === value; i--, j++) {
        count++;
    }
    for (let i = row + 1, j = col - 1; i < rows && j >= 0 && matrix[i][j] === value; i++, j--) {
        count++;
    }
    if (count >= winningLength) {
        return true;
    }

    return false;
};

export const CheckDraw = () => {};
