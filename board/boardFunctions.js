import {EMPTY_CELL, MAX_ROWS, MAX_COLS} from ".././consts.js";

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


export {printBoard};