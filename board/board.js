import {EMPTY_CELL, MAX_ROWS, MAX_COLS} from ".././consts.js";

//==========================================
//               create board
//==========================================
function createEmptyBoard(rows, cols) {
  //creates a empty board.
  return Array(rows).fill(Array(cols).fill(EMPTY_CELL));
}

//==========================================
//                 board
//==========================================

const board = createEmptyBoard(MAX_ROWS, MAX_COLS);


export default board;