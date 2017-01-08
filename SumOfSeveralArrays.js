function sumOfSeveralArrays(arr){
  var sum=0;
  /*for(var i = 0 ; i<arr.length ; i++){
    for(var j =0 ; j<arr[i].length ; j++){
      sum += arr[i][j];
    }
  }*/
  return arr.reduce(function(a,b){
    console.log('a = ' , a , ' b = ' , b);
    return a.concat(b);
  }).reduce(function(a,b){
    return a+b;
  })
  //return sum;
}

console.log(sumOfSeveralArrays([[3,4],[1],[5,6]]));
