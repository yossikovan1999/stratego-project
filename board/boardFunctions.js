import {EMPTY_CELL, MAX_ROWS, MAX_COLS} from ".././consts.js";
import board from "./board.js";

//==========================================
//              print Board
//==========================================
function printBoard(board){
    let str = ""
   for (let r of board){
    str+="["
    for (let c of r){
       if (typeof c != 'object'){
        str+=EMPTY_CELL;
       }else{
        if (c.player === "player"){
            str+="O"
        }else{
            str+="X"
        }
       }
       str+=" "
    }
    str = str.slice(0,str.length-1)
    str+="]\n"
   }
   return str
}


/**
 * 
 * @param {*} character - this is the soldier on the board. 
 * @param {*} position - new positon to update.
 * @param {*} previousPosition - old position to update to empty cell.
 * this function manages moving the soldier to a empty space. 
 * (updating the board)
 */
function updateBoard(character, position, previousPosition){

    board[position.row][position.com] = character;
    board[previousPosition.row][previousPosition.col] = EMPTY_CELL;
}


export {printBoard, updateBoard};