/*function twoSumProblem(arr){
  var hashTable = [];
  for(var i =0 ; i<arr[0].length-1 ; i++){
    for(var j =i+1 ; j<arr[0].length;j++){
      if(arr[0][i]+arr[0][j]==arr[1]){
        hashTable.push(arr[0][i],arr[0][j]);
      }
    }
  }
  return hashTable;
}*/

function twoSumProblem(arr){
  var hashtable ={};
  for(var i =0 ; i<arr[0].length ; i++){
    console.log('arr[1] = ' , arr[1] ,' i = ' ,i , 'arr[0][',i,'] = ' ,arr[0][i]);
    var sumMinusElement = arr[1]-arr[0][i];
    if(hashtable[sumMinusElement]!=undefined){
      return true;
    }
    hashtable[arr[0][i]]=true;
  }
  return false;
}

var arr = [10,2,15,7,1,8];
console.log(twoSumProblem([arr,9]));
