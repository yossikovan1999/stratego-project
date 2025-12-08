import readLineSync from "readline-sync";

function createSoldier(type, rank, player) {
  return {
    player: player,
    rank: rank,
    type: type,
    location: { x: undefined, y: undefined },
  };
}




let t = readLineSync.question();
console.log(t);
