// Solution for: 
class Solution {
    // Helper function to check if the word exists starting from cell (i, j)
    func(board, i, j, word, k) {
        // If all characters of the word are found
        if (k === word.length) {
            return true;
        }
        // Boundary conditions and character mismatch check
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || word[k] !== board[i][j]) {
            return false;
        }

        // Temporarily mark the cell as visited
        let temp = board[i][j];
        board[i][j] = ' ';

        // Check all four possible directions (down, up, right, left)
        let ans = this.func(board, i + 1, j, word, k + 1) ||
                  this.func(board, i - 1, j, word, k + 1) ||
                  this.func(board, i, j + 1, word, k + 1) ||
                  this.func(board, i, j - 1, word, k + 1);

        // Restore the original character in the cell
        board[i][j] = temp;
        
        return ans;
    }

    // Main function to check if the word exists in the board
    exist(board, word) {
        // Iterate through each cell in the board
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                // If the first character matches, start the search
                if (board[i][j] === word[0]) {
                    // If the word is found, return true
                    if (this.func(board, i, j, word, 0)) {
                        return true;
                    }
                }
            }
        }
        // If the word is not found, return false
        return false;
    }
}