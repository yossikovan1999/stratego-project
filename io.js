import readLineSync from "readline-sync";

function printValidMoves(validMoves){
    
    console.log("please enter a movement from the following list :");

    for(let i = 0; i < validMoves.length; i++){
        console.log(`${i} ) move ${validMoves[i].name}:`); 
    }
}

function getUserInput(message=""){
    return readLineSync.question(message);
}


export {printValidMoves, getUserInput};