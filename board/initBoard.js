import  createSoldjer from "../character.js";
import { EMPTY_CELL } from "../consts.js";
import board from "./board.js";




//==========================================
//               create board
//==========================================
function createEmptyBoard(rows, cols) {
  //creates a empty board.
  return Array(rows).fill(null).map(() => Array(cols).fill(EMPTY_CELL));
}

//==========================================
//             initPieces
//==========================================
function fillBoard(pieces){
  //put the pieces into the matrix.
  pieces.forEach(element => {
    board[element.location.x][element.location.y] = element
  }); 
}


export {createEmptyBoard, fillBoard}