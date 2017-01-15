function firstRepeatingChar(str){
  var hasTable ={};
  for(var c of str){
    if(hasTable[c]===undefined){
      hasTable[c]=1;
    }else{
      hasTable[c] +=1;
    }
  }
  console.log(hasTable);
  for(var c of str){
    if(hasTable[c]==1){
      return c;
    }
  }
  return -1;
}

console.log(firstRepeatingChar('hello ohenery'));
