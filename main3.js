import board from "./board/board.js";
import { printBoard, createSoldiers } from "./board/boardFunctions.js";
import { seeWolking, moveHuman, moveComputer } from "./game/moving.js"
import { createSoldiersAI2, createSoldiersplayer2 } from "./faza2/soldiers.js";
import readLineSync from "readline-sync"

/**
 * 
 * @param {*} result 
 * @param {*} player 
 * @returns 
 */
function handleResult(result, player){

    if (result === "GAME_OVER") {
        console.log(`you ${player} won by by`);
        return true
    }


    for (let r of board) {
        for (let c of r) {
            if (typeof c === 'object' && c.player === player) {
                return true;
            }
        }
    }
        
    console.log(`you ${player} lost by by`);
    return false;
}

function playerTurn(){
    
    console.log("enter soldier row and color");
    const row = readLineSync.question("which row: ");
    const col = readLineSync.question("which col: ");
       
    if ((typeof board[row][col] === 'object' && board[row][col].player === "AI") || typeof board[row][col] === "string") {
        console.log("only O");
        return false;
    }

    seeWolking(board, board[row][col])
    const result = moveHuman(board[Number(row)][Number(col)])
    printBoard(board)

    if(handleResult(result, "player")){
       return true;
    }

    return false;

}

function computerTurn(){

    const result = moveComputer();
    printBoard(board)

    if(handleResult(result, "AI")){
       return true;
    }
    
}

/**
 * game function.
 */
function game() {
    
    createSoldiersplayer2(board)
    createSoldiersAI2(board)
    printBoard(board)
    
    let gameOver = false;

    while (true) {
        
        gameOver = playerTurn();
        
        //check if the players turn ended the game
        // if(gameOver){
        //     return;
        // }

        gameOver = computerTurn();
        
        //check if the computers turn ended the game
        // if(gameOver){
        //     return 
        // }
    }
}

game()