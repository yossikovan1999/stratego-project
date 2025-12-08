import { DIRECTION, MAX_COLS, MAX_ROWS } from ".././consts.js";
import { getUserInput, printValidMoves } from ".././io.js";
import { updateBoard } from "../board/boardFunctions.js";

/**
 * @character - this is the character object.
 * @move - this is the movement array.
 * this function will check if the move that the 
 * player chooses is a valid move.
 */
function validMove(character, move) {

    //check valid column move
    if (character.x + move[0] > MAX_COLS || character.x + move[0] < 0) {
        return false;
    }

    //check valid row move.
    if (character.y + move[1] > MAX_ROWS || character.y + move[1] < 0) {
        return false;
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

        if (validMove(character, DIRECTION.directionName)) {
            validMovemets.push({ direction: DIRECTION.directionName, name: directionName });
        }
    }

    return validMovemets;

}

/**
 * @param character - this is the character object.
 * this function is in charge of moving the soldier.
 */
function moveSoldier(character) {

    const validMoves = getValidMoves(character);

    //this will print the valid available moves.
    printValidMoves(validMoves);

    const userInput = getUserInput();

    if (checkIsBattle()) {
        //handle battle
    } else {

        //in the case that it is not a battle.

        const vector = validMove[userInput].direction;
        const prevPos = { row: character.location.x, col: character.location.y };
        const curPos = { row: character.location.x + vector.row, col: character.location.y + vector.col }

        updateBoard(character, prevPos, curPos);
    }
}


function seeWolking(board, soldjer) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {

            if (board[i][j] === soldjer) {
                if (j > 0) {
                    if (typeof board[i][j - 1] === 'object') {
                        console.log(`in the left have soldjer of ${board[i][j - 1].player}`)
                    } else {
                        console.log("in the left is avlable");
                    }
                } if (j < board[i].length - 1) {
                    if (typeof board[i][j + 1] === 'object') {
                        console.log(`in the rigth have soldjer of ${board[i][j + 1].player}`)
                    } else {
                        console.log("in the rigth is avlable");
                    }
                } if (i > 0) {
                    if (typeof board[i - 1][j] === 'object') {
                        console.log(`in the up have soldjer of ${board[i - 1][j].player}`)
                    } else {
                        console.log("in the up is avlable")
                    } if (i < board.length - 1) {
                    if (typeof board[i + 1][j] === 'object') {
                        console.log(`in the dwon have soldjer of ${board[i + 1][j].player}`)
                    } else {
                        console.log("in the down is avlable");

                    }
                }
            }
        }
    }

}
}

export { seeWolking, moveSoldier }