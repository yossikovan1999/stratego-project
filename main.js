import board from "./board/board.js";
import {printBoard} from "./board/boardFunctions.js";
import { fillBoard } from "./board/initBoard.js";
import createSoldier  from "./character.js";
import {seeWolking,moveSoldier} from "./game/moving.js"


function main(){
    console.log(printBoard(board));
}
let s = createSoldier("S",3,"AI",1,1)
let t = createSoldier("S",3,"player",0,2)
fillBoard([s,t])
main()
seeWolking(board,t)
// moveSoldier(s)
main();