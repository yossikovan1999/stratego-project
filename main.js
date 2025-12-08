import board from "./board/board.js";
import {printBoard} from "./board/boardFunctions.js";
import { fillBoard } from "./board/initBoard.js";
import createSoldier  from "./character.js";


function main(){
    console.log(printBoard(board));
}
let s = createSoldier("S",3,"ll",1,1)
fillBoard([s])
main();