import createSoldier from "../character.js";
import readLineSync from "readline-sync"

function createSoldiersplayer2(board) {
    const ranks = [1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9, 10]
    const soldiers = ranks.map((rank) => {
        return createSoldier("S", rank, "player")
    })
    const flag = createSoldier("F", 0, "player")
    soldiers.push(flag)
    soldiers.forEach((s)=>{
        while (true){
          console.log(`type ${s.type} rank ${s.rank}`)
          //let row = readLineSync.question("wich row 0-3: ")
          //let col = readLineSync.question("wich col: ")

          let row = Math.floor(Math.random() * 4);
          let col = Math.floor(Math.random() * 10);
       
          if (row != 0 && row != 1 && row != 2 && row != 3 || typeof board[row][col] === 'object'){
            continue
          }
          board[row][col] = s
          s.location.x = Number(row)
          s.location.y = Number(col)
          break
        }
    })
}

function createSoldiersAI2(board){
    const ranks = [1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9, 10]
    const soldiers = ranks.map((rank) => {
        return createSoldier("S", rank, "AI")
    })
    const flag = createSoldier("F", 0, "AI")
    soldiers.push(flag)
    soldiers.forEach((s)=>{
        while (true){
            let row = Math.floor(Math.random()*4)+6
            let col = Math.floor(Math.random()*board[0].length)
            if (typeof board[row][col] === 'object'){
                continue
            }
            board[row][col] = s
            s.location.x = row
            s.location.y = col
            break
        }
    })
}

export {createSoldiersAI2,createSoldiersplayer2}

