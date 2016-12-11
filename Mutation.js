function mutation(arr) {
  var pos = 0;
  for(var i =0 ; i<arr[1].length && pos!=-1 ; i++){
    pos = arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase());
  }
  if(pos==-1){
    return false;
  }else{
    return true;
  }
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
