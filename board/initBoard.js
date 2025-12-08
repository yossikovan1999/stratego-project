import { createCharacter, createSoldjer } from "../character.js";
import board from "./board.js";


//==========================================
//               create board
//==========================================
function createEmptyBoard(rows, cols) {
  //creates a empty board.
  return Array(rows).fill(Array(cols).fill(EMPTY_CELL));
}

//==========================================
//             initPieces
//==========================================
function fillBoard(pieces){
  //put the pieces into the matrix.
  pieces.array.forEach(element => {
    board[element.x][element.y] = element;
  }); 

}


export {createEmptyBoard, fillBoard}