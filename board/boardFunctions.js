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
 * @returns this will return a random col on the board.
 */
function getRandomCol(){
    
    while(true){
        let col = Math.floor(Math.random() * MAX_COLS);
        
        if(typeof board[0][col] != "object"){
            return col;
        }
    }
}

/**
 * 
 */
function createSoldiers(row){

    for(const number of CHARACTER_NUMBERS){
        let soldierType = number === 0 ? 'F' : 'S';
        const col = getRandomCol()
        const character = createSoldier(soldierType, number, "computer" , row, col);
        board[row][col] = character;
    }
}


/**
 * 
 * @param {*} character - this is the soldier on the board. 
 * @param {*} position - new positon to update.
 * @param {*} previousPosition - old position to update to empty cell.
 * this function manages moving the soldier to a empty space. 
 * (updating the board)
 */
function updateBoard(character, position, prevPosition){

    board[position.row][position.col] = character;
    board[prevPosition.row][prevPosition.col] = EMPTY_CELL;
}


export {printBoard, updateBoard, createSoldiers};