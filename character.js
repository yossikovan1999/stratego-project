import readLineSync from "readline-sync";

function createSoldier(type, rank, player) {
  return {
    player: player,
    rank: rank,
    type: type,
    location: { x: undefined, y: undefined },
  };
}

function seeWolking(board, soldjer) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i]; j++) {
      if (board[i][j] === soldjer) {
        if (j > 0) {
          if (typeof board[i][j - 1] === 'object') {
            console.log(`in the left have soldjer of ${board[i][j - 1].player}`)
          } else {
            console.log("in the left is avlable");
          }
        }if (j < board[i].length-1){
          if (typeof board[i][j + 1] === 'object') {
            console.log(`in the rigth have soldjer of ${board[i][j + 1].player}`)
          } else {
            console.log("in the rigth is avlable");
          }
        }if (i > 0){
          if (typeof board[i-1][j] === 'object') {
            console.log(`in the up have soldjer of ${board[i-1][j].player}`)
          } else {
            console.log("in the up is avlable")
          }
        }if (typeof board[i+1][j] === 'object') {
            console.log(`in the dwon have soldjer of ${board[i+1][j].player}`)
          } else {
            console.log("in the down is avlable");

          }
      }
    }
  }

}


<<<<<<< HEAD

//==========================================
//           compare characters
//==========================================
function compareCharacters(attacker, attacked){
  
   if(attacker.type === 'F'){
    throw new Error("Attacker cannot be a flag, internal game error!");
   }


  if(attacked.type === 'F'){
    return "GAME_OVER";
  }else if(attacker.rank < attacked.rank){
    return "ATTACKER_WON";
  }else if(attacker.rank > attacked.rank){
    return "ATTACKED_WON";
  }


}


let t = readLineSync.question();
console.log(t);
=======
>>>>>>> 918cae514f303b148c21b5dc5fd24104460172e9
