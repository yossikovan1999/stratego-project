import { createCharacter, createSoldjer } from "../character.js";
import { CHARACTER_NUMBERS, COLS, EMPTY_CELL } from ".././consts.js";

//==========================================
//           get Random Location
//==========================================
function getRandomColumn(row) {
  //this function will return the value of a randon column.
  return {row : row, col :  Math.floor(Math.random() * COLS)};
}

//==========================================
//         check location available
//==========================================
function locationAvailabe(matrx, location) {

    if(matrix[location.row][location.col] === EMPTY_CELL){

    }

}

//==========================================
//             initPieces
//==========================================
function initPieces() {
  for (const number of CHARACTER_NUMBERS) {
    if (number === 0) {
      createCharacter("F", number);
    } else {
      createCharacter("S", number);
    }
  }
}
