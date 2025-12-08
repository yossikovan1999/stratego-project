import board from "./board/board.js";
import {printBoard, createSoldiers} from "./board/boardFunctions.js";
import { fillBoard } from "./board/initBoard.js";
import createSoldier  from "./character.js";
import {seeWolking,moveSoldier} from "./game/moving.js"
function game(){
    const soldier = createSoldier("S",Math.floor(Math.random()*9)+1,"player",9,Math.floor(Math.random()*10))
    fillBoard([soldier])
    seeWolking(board,soldier)
    
}

function main(){
    console.log(printBoard(board));
}
const soldier = createSoldier("S",3,"player",9,0) 
fillBoard([soldier])
main()

main();