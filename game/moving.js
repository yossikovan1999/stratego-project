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

