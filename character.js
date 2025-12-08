import readLineSync from "readline-sync";

function createSoldier(type, rank, player) {
  return {
    player: player,
    rank: rank,
    type: type,
    location: { x: undefined, y: undefined },
  };
}

function seeWolking(board, soldjer) {}


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
