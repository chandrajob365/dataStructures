function insertionSort(array){
  for(var i =0 ; i< array.length-1 ; i++){
    var key = array[i+1];
    //var swapIndex = i+1;
    var j ;
    for(j =i ; j>=0 && key < array[j]; j--){
      //if(key < array[j]){
        array[j+1]=array[j];
        swapIndex = j;
      //}
    }
    //array[swapIndex]=key;
    array[j+1]=key; // j has already decreased by one before comming out of loop so adding 1 to it , but swapIndex didn't .swapIndex = j+1
  }
  return array;
}

console.log(insertionSort([2, 3, 5, 7, 11, 13, 9, 6 ]));
