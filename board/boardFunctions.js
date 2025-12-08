import {EMPTY_CELL, MAX_ROWS, MAX_COLS, CHARACTER_NUMBERS} from ".././consts.js";
import board from "./board.js";
import createSoldier from "../character.js";

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
 * get Random Col
 */
function getRandomCol(row){
    
    while(true){
        let col = Math.floor(Math.random() * MAX_COLS);
        
        if(typeof board[row][col] != "object"){
            return col;
        }
    }
}

/**
 * this function gets the the row number and will fill the row with 
 * soldiers.
 */
function createSoldiers(row, player){

    for(const number of CHARACTER_NUMBERS){
        
        if(player != "computer"){
            console.log(number)
        }

        const soldierType = number === 0 ? 'F' : 'S';
        const col = getRandomCol(row)
        const character = createSoldier(soldierType, number, player, row, col);
        board[row][col] = character;
    }
}

/**
 * @param {*} character - this is the soldier on the board. 
 * @param {*} position - new positon to update.
 * @param {*} previousPosition - old position to update to empty cell.
 * this function manages moving the soldier to a empty space. 
 * (updating the board).
 */
function updateBoard(character, position, prevPosition){
    
    console.log("here");
    board[position.row][position.col] = character;
    board[prevPosition.row][prevPosition.col] = EMPTY_CELL;
}


export {printBoard, updateBoard, createSoldiers};