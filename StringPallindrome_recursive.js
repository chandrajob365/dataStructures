var chkPallindrome_Recursive = function(str){
  console.log(str);
  if(str.length<=1){
    return "Pallindrome";
  }else{
    if(str[0].toLowerCase()===str[str.length-1].toLowerCase()){
      console.log(str[0]+ ' , ' +str[str.length-1]);
      return chkPallindrome_Recursive(str.substring(1,str.length-1));
    }else{
      return "Not Pallindrome";
    }
  }
}

console.log(chkPallindrome_Recursive('rotor'));
