function removeChars(arr , str){
  var hashTable ={};
  for(var i =0 ; i<arr.length ;i++){
    hashTable[arr[i]]=true;
  }
  console.log(hashTable);
  var result ='';
  for(var i =0 ; i<str.length ;i++){
    if(hashTable[str[i]]==undefined){
      result += str[i];
    }
  }
  return result;
}
console.log(removeChars(['h','w','e','l'],'hello world'));
