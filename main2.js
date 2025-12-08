import board from "./board/board.js";
import { printBoard, createSoldiers } from "./board/boardFunctions.js";
import { seeWolking, moveSoldier } from "./game/moving.js"
import { createSoldiersAI2, createSoldiersplayer2 } from "./faza2/soldiers.js";
import readLineSync from "readline-sync"
function game() {
    createSoldiersplayer2(board)
    createSoldiersAI2(board)
    printBoard(board)
    while (true) {
        console.log("enter soldier row and color");
        let row = readLineSync.question("which row: ")
        let col = readLineSync.question("which col: ")
        if ((typeof board[row][col] === 'object' && board[row][col].player === "AI") || typeof board[row][col] === "string") {
            console.log("only O");
            continue
        }

        seeWolking(board, board[row][col])
        const result = moveSoldier(board[Number(row)][Number(col)])
        printBoard(board)
        if (result === "GAME_OVER") {
            console.log("you won by by");
            break
        }
        let breakgame = false
        for (let r of board) {
            for (let c of r) {
                if (typeof c === 'object' && c.player === "player") {
                    breakgame = true
                }
            }
        }
        if (breakgame === false) {
            console.log("you lost by by");
            break
        }
    }
}
game()