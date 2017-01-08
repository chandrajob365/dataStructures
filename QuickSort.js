function quickSort(arr , start , end){
  if(start<end){
    var pIndex = partition(arr,start,end);
    quickSort(arr,start,pIndex-1);
    quickSort(arr,pIndex+1,end);
  }
}

function partition(arr,start,end){
  var pivot = arr[end];
  var pIndex = start;
  for(var i = start ; i < end ; i++){
    if(arr[i]<pivot){
      var temp = arr[i];
      arr[i]=arr[pIndex];
      arr[pIndex]=temp;
      pIndex++;
    }
  }
  var temp = arr[end];
  arr[end]= arr[pIndex];
  arr[pIndex]=temp;
  return pIndex;
}

var arr = [2,5,3,8,1,4]
var start =0 ;
var end = arr.length-1;
quickSort(arr,start,end);
console.log('Sorted arr --- ' , arr);
