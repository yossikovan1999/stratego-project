function create_soldjer(type,rank){
    return{
     rank:rank,
     type:type,
     location:{x:undefined,y:undefined}
    }
}

console.log(create_soldjer("S",5));
