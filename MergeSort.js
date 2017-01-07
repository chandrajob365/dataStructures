function mergeSort(arr){
  var n = arr.length;
  if(n<2){
    return;
  }
  var mid = n/2;
  console.log('MID = ' , mid);
  var lArr = [];
  var rArr = [];

  for(var i =0 ; i<mid ; i++){
    lArr[i]=arr[i];
  }
  for(var j =mid ; j<n ; j++){
    rArr[j-mid]=arr[j];
  }

  mergeSort(lArr);
  mergeSort(rArr);
  console.log('-----Before calling Merge-----');
  console.log('lArr -- ' , lArr);
  console.log('rArr -- ', rArr);
  console.log('arr -- ' , arr);
  merge(lArr , rArr , arr);
}

function merge(lArr , rArr , arr){
  console.log('-----Inside Merge-----');
  console.log('lArr -- ' , lArr);
  console.log('rArr -- ', rArr);
  console.log('arr -- ' , arr);
  var i=j=k=0;
  while(i<lArr.length && j<rArr.length){
    if(lArr[i]<rArr[j]){
      arr[k]=lArr[i];
      i++;
    }else{
      arr[k]=rArr[j];
      j++
    }
    k++;
  }
  while(i<lArr.length){
    arr[k]=lArr[i];
    i++ ;
    k++ ;
  }
  while(j<rArr.length){
    arr[k]=rArr[j];
    j++ ;
    k++ ;
  }
}
var arr = [2,5,3,7,6,9,1,8];
console.log('Original arr -- ' , arr);
mergeSort(arr);
console.log('Final sorted arr -- ',arr);
