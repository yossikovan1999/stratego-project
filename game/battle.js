<<<<<<< HEAD
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
=======
function resoltComparison(board, attacker, attacked, resolt) {
    if (resolt === "GAME_OVER") {
        let tmp = [attacker.x, attacker.y]
        attacker.x = attacked.x
        attacker.y = attacked.y
        board[attacked.x][attacked.y] = attacker
        board[tmp[0]][tmp[1]] = "_"
        console.log(resolt)
    } else {
        if (resolt === "ATTACKER_WON") {
            let tmp = [attacker.x, attacker.y]
            attacker.x = attacked.x
            attacker.y = attacked.y
            board[attacked.x][attacked.y] = attacker
            board[tmp[0]][tmp[1]] = "_"
            console.log(resolt);
        } else if (resolt === "ATTACKED_WON") {
            board[attacker.x][attacker.y] = "_"
            console.log(resolt);
        } else if (resolt === TIE) {
            board[attacked.x][attacked.y] = "_"
            board[attacker.x][attacker.y] = "_"
        }
    }
}















//      }else if(resolt === "ATTACKER_WON"){
//         for (let i = onabort;i<board.length;i++){
//             for (let j = 0;j<board[i].length;j++){
//                 if (board[i][j] === attacked){
//                     board[i][j] = attacker
//                     console.log(resolt)
//                 }
//             }
//         }
//      }else if(resolt === "ATTACKED_WON"){

//      }
// }
>>>>>>> c20593be086eb956565c56f88c0a509d0bef1971
