import { DIRECTION, MAX_COLS, MAX_ROWS } from ".././consts.js";
import { getUserInput, printValidMoves } from ".././io.js";
import { updateBoard } from "../board/boardFunctions.js";
import board from "../board/board.js";
import {
  checkIsBattle,
  compareCharacters,
  resoltComparison,
} from "../game/battle.js";

/**
 * @character - this is the character object.
 * @move - this is the movement array.
 * this function will check if the move that the
 * player chooses is a valid move.
 */
function validMove(character, move) {
  //check valid column move
  if (
    character.location.x + move[0] > MAX_COLS - 1 ||
    character.location.x + move[0] < 0
  ) {
    return false;
  }

  //check valid row move.
  if (
    character.location.y + move[1] > MAX_ROWS - 1 ||
    character.location.y + move[1] < 0
  ) {
    return false;
  }

  /*check there is a object in the cell the player wants to move 
  to and if there is will return false if it is not the same player 
  and true if it is.*/
  if (
    typeof board[character.location.x + move[0]][
      character.location.y + move[1]
    ] === "object"
  ) {
    const moveToObject =
      board[character.location.x + move[0]][character.location.y + move[1]];
    return moveToObject.player !== character.player;
   }

  //move is valid.
  return true;
}

/**
 * @charactr - character object.
 * this function will return a array of all the valid movements.
 */
function getValidMoves(character) {
  const validMovemets = [];

  for (const directionName in DIRECTION) {
    
    if (validMove(character, DIRECTION[directionName])) {
      validMovemets.push({
        direction: DIRECTION[directionName],
        name: directionName,
      });
    }
  }

  return validMovemets;
}

/**
 * @param {*} character - this is the character object.
 * this function is in charge of moving the soldier.
 */
function moveSoldier(character) {
  const validMoves = getValidMoves(character);

  //this will print the valid available moves.
  printValidMoves(validMoves);

  const userInput = getUserInput();

  //this is the moving vector (values where to move).
  const vector = validMoves[userInput].direction;
  //this is the previous position
  const prevPos = { row: character.location.x, col: character.location.y };
  //this is the new position
  const newPos = {
    row: character.location.x + vector[0],
    col: character.location.y + vector[1],
  };
  

  if (checkIsBattle(board, newPos)) {
    const result = compareCharacters(character, board[newPos.row][newPos.col]);
    resoltComparison(board, character, board[newPos.row][newPos.col], result);
    return result;
  } else {
    updateBoard(character, newPos, prevPos);
  }
}

function seeWolking(board, soldjer) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) { 
      if (board[i][j] === soldjer) {
        if (j > 0) {
          if (typeof board[i][j - 1] === "object") {
            console.log(
              `in the left have soldjer of ${board[i][j - 1].player}`
            );
          } else {
            console.log("in the left is avlable");
          }
        }
        if (j < board[i].length - 1) {
          if (typeof board[i][j + 1] === "object") {
            console.log(
              `in the rigth have soldjer of ${board[i][j + 1].player}`
            );
          } else {
            console.log("in the rigth is avlable");
          }
        }
        if (i > 0) {
          if (typeof board[i - 1][j] === "object") {
            console.log(`in the up have soldjer of ${board[i - 1][j].player}`);
          } else {
            console.log("in the up is avlable");
          }
        }
        if (typeof board[i + 1][j] === "object") {
          console.log(`in the dwon have soldjer of ${board[i + 1][j].player}`);
        } else {
          console.log("in the down is avlable");
        }
      }
    }
  }
}

export { seeWolking, moveSoldier };
