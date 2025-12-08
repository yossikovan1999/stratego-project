//==========================================
//           compare characters
//==========================================
function compareCharacters(attacker, attacked){
   
   //if the attacker is a flag throw a error.
   if(attacker.type === 'F'){
    throw new Error("Attacker cannot be a flag, internal game error!");
   }

  if(attacked.type === 'F'){
    return "GAME_OVER";
  }else if(attacker.rank === 1 && attacked.rank === 9){
    return "ATTACKER_WON";
  }else if(attacker.rank < attacked.rank){
    return "ATTACKER_WON";
  }else if(attacker.rank > attacked.rank){
    return "ATTACKED_WON";
  }else{
    return "TIE";
  }
}