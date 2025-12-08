import readLineSync from "readline-sync";

function createSoldier(type, rank, player, x = undefined, y = undefined) {
  return {
    player: player,
    rank: rank,
    type: type,
    location: { x: x, y: y},
  };
}


export default createSoldier