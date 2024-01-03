const DIRECTIONS = [
  // horizontal
  [0, 1],

  // vertical
  [1, 0],

  // diagnol
  [1, 1],
  [1, -1],
];
export default function computeResult(board) {
  const boardLen = board.length;
  let hasEmptyCells = false;

  // Will check every position of board.
  for (let i = 0; i < boardLen; ++i) {
    for (let j = 0; j < boardLen; ++j) {
      const player = board[i][j];
      if (player == null) {
        hasEmptyCells = true;
        continue;
      }
      // At every position, must check all winning possibilities (horizontal, vertical, diagnol)
      for (const [di, dj] of DIRECTIONS) {
        // for every direction, keep traversing in the direction to determine results
        let count = 1;
        let ci = i;
        let cj = j;

        while (true) {
          ci += di;
          cj += dj;
          // if position is out of bounds of player at pos no longer equals cur player, break.
          if (
            ci < 0 ||
            cj < 0 ||
            ci >= boardLen ||
            cj >= boardLen ||
            board[ci][cj] !== player
          ) {
            break;
          }
          ++count;
        }

        if (count >= boardLen) {
          return { isGameOver: true, winner: player };
        }
      }
    }
  }
  return { isGameOver: !hasEmptyCells, winner: null };
}
