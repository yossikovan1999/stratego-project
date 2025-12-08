import board from "./board/board.js";
import {printBoard, createSoldiers} from "./board/boardFunctions.js";
import { fillBoard } from "./board/initBoard.js";
import createSoldier  from "./character.js";
import { moveSoldier, seeWolking} from "./game/moving.js";

createSoldiers(0, "computer");
// createSoldiers(board.length-1, "player");

const player = createSoldier('S', 8, "player", 8, 0);
fillBoard([player]);

console.log(printBoard(board));

// seeWolking(board, player);
moveSoldier(player);

console.log(printBoard(board));