function create_soldjer(type,rank,player){
    return{
     player:player,
     rank:rank,
     type:type,
     location:{x:undefined,y:undefined}
    }
}

function printBoard(board){
    let str = ""
   for (let r of board){
    str+="["
    for (let c of r){
       if (typeof c != 'object'){
        str+="_"
       }else{
        if (c.player === "player"){
            str+="O"
        }else{
            str+="X"
        }
       }
       str+=" "
    }
    str+="]\n"
   }
   return str
}


