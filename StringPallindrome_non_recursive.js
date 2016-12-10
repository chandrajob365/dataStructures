var chkPallindrome = function(str){
  for(var i =0 ; i< str.length ; i++){
    if(str[i].toLowerCase()!==str[str.length-1-i].toLowerCase())
      return "Not Pallindrome !!";
  }
  return "Pallindrome";
}

console.log(chkPallindrome('Rotor'));
