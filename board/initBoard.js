import { createCharacter, createSoldjer } from "../character.js";
import board from "./board.js";


//==========================================
//             initPieces
//==========================================
function fillBoard(pieces){
  //put the pieces into the matrix.
  pieces.array.forEach(element => {
    board[element.x][element.y] = element;
  }); 

}