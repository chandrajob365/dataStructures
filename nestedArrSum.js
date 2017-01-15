function sumOfNestedArr(arr){
  var result = 0;
  for(var i =0 ; i<arr.length ; i++){
    console.log('typeof arr[i] = ',typeof arr[i] , ' arr[i] = ' , arr[i]);
    if((typeof arr[i])!=='number'){
      result += sumOfNestedArr(arr[i]);
    }else{
      result += arr[i];
    }
    console.log('result = ',result);
  }
  return result;
}

var arr =[1,1,1,[3,4,[8]],[5]];
console.log(sumOfNestedArr(arr));
