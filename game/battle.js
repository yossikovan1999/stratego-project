
//==========================================
//           compare characters
//==========================================
function compareCharacters(attacker, attacked) {

    //if the attacker is a flag throw a error.
    if (attacker.type === 'F') {
        throw new Error("Attacker cannot be a flag, internal game error!");
    }
    console.log(`attacker: ${attacker.rank},attacked: ${attacked.rank}`);
    if (attacked.type === 'F') {
        return "GAME_OVER";
    } else if (attacker.rank === 1 && attacked.rank === 9) {
        return "ATTACKER_WON";
    } else if (attacker.rank < attacked.rank) {
        return "ATTACKER_WON";
    } else if (attacker.rank > attacked.rank) {
        return "ATTACKED_WON";
    } else {
        return "TIE";
    }
}
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


function checkIsBattle(board,new1){
     if (typeof board[new1.row][new1.col] === 'object'){
        return true
     }
     return false
}

export {compareCharacters,resoltComparison,checkIsBattle}