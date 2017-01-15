function matchingParenthesis(str){
  var counter=0;
  for(var c in str){
    if(str[c]=='(') counter++;
    else if(str[c]==')')counter--;

  }
  if(counter==0){
    return true;
  }
  return false;
}

console.log(matchingParenthesis('((()))(()'));
