import board from "./board/board.js";
import {printBoard, createSoldiers} from "./board/boardFunctions.js";
import { fillBoard } from "./board/initBoard.js";
import createSoldier  from "./character.js";
import {seeWolking, moveHuman} from "./game/moving.js"
function game(){
    const soldier = createSoldier("S",Math.floor(Math.random()*9)+1,"player",9,Math.floor(Math.random()*10))
    createSoldiers(0,"AI")
    fillBoard([soldier])
    console.log( printBoard(board));
    while (true){
    seeWolking(board,soldier)
    const result = moveHuman(soldier)
    console.log(printBoard(board));
     if (result === "GAME_OVER"){
        console.log("you won by by");
        break
     }
    if (result === "ATTACKED_WON" || result === "TIE"){
        console.log("you lost by by");
        break
    }
    for (let i = 0;i<board.length;i++){
}
}
}


game()
