// Solution for: 
class Solution {
  // Check if it's safe to place a queen at board[row][col]
  isSafe(board, row, col) {
    let r = row,
      c = col;

    // Check for upper left diagonal
    while (r >= 0 && c >= 0) {
      if (board[r][c] === "Q") return false;
      r--;
      c--;
    }

    // Reset to the original position
    r = row;
    c = col;

    // Check for top
    while (r >= 0) {
      if (board[r][c] === "Q") return false;
      r--;
    }

    // Reset to the original position
    r = row;
    c = col;

    // Check for top left diagonal
    while (r >= 0 && c < board[0].length) {
      if (board[r][c] === "Q") return false;
      r--;
      c++;
    }

    // If no queens are found, it's safe
    return true;
  }

  // Function to place queens on the board
  func(row, ans, board) {
    // If all columns are filled, add the solution to the answer
    if (row === board.length) {
      ans.push(board.map((r) => r.join("")));
      return;
    }

    // Try placing a queen in each column for the current row
    for (let col = 0; col < board[0].length; col++) {
      // Check if it's safe to place a queen
      if (this.isSafe(board, row, col)) {
        // Place the queen
        board[row][col] = "Q";

        // Recursively place queens in the next rows
        this.func(row + 1, ans, board);

        // Remove the queen and backtrack
        board[row][col] = ".";
      }
    }
  }

  // Solve the N-Queens problem
  solveNQueens(n) {
    // List to store the solutions
    let ans = [];
    // Initialize the board with empty cells
    let board = Array.from({ length: n }, () => Array(n).fill("."));

    // Start placing queens from the first column
    this.func(0, ans, board);
    return ans;
  }
}

