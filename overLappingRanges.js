function overlappingRange(arr){
  var count =0;
  if(arr[0]>arr[2]){
    for(var i = arr[0] ; i<arr[1] ; i++){
      if(i>=arr[2] && i<=arr[3]){
        count++;
      }
    }
  }else{
    for(var i = arr[2] ; i<arr[3] ; i++){
      if(i>=arr[0] && i<=arr[1]){
        count++;
      }
    }
  }
  return count==arr[4]?true:false;
}
console.log(overlappingRange([4,10,2,6,3]));
