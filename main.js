import board from "./board/board.js";
import {printBoard, createSoldiers} from "./board/boardFunctions.js";
import { fillBoard } from "./board/initBoard.js";
import createSoldier  from "./character.js";



createSoldiers(0);
console.log(printBoard(board));