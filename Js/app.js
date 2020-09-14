const playerFactory = (name, mark) => {
  const playTurn = (board, cell) => {
    const idx = board.cells.findIndex(position => position === cell);
    if (board.boardArray[idx] === '') {
      board.render();
      return idx;
    }
    return null;
  };

  return { name, mark, playTurn };
};

const boardModule = (() => {
  let boardArray = ['', '', '', '', '', '', '', '', ''];
  const gameBoard = document.querySelector('#board');
  const cells = Array.from(document.querySelectorAll('.cell'));
  let winner = null;

  const render = () => {
    boardArray.forEach((mark, idx) => {
      cells[idx].textContent = boardArray[idx];
    });
  };

   const reset = () => {
    boardArray = ['', '', '', '', '', '', '', '', ''];
  };

const checkWin = () => {
    const winArrays = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
