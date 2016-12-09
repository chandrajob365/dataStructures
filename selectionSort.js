function selectionSort(array){
  for(var i =0 ; i< array.length ; i++){
    var minValue = array[i];
    var minIndex = i;
    for(var j=i+1 ; j<array.length ; j++){
      if(minValue > array[j]){
        minValue = array[j];
        minIndex = j;
      }
    }
    swap(minIndex,i,array);
  }
  return array;
}

function swap(minIndex , currentIndex , array){
  var temp = array[currentIndex];
  array[currentIndex]= array[minIndex];
  array[minIndex] = temp;
}

console.log(selectionSort([8,2,10,16,5,19]));


/*var displayArray = function(array) {
    textFont(createFont("monospace"), 12);

};

var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

var selectionSort = function(array, canvasX) {
    for (var i = 0; i < array.length; i++) {
        text(array, 20+canvasX, 30 * (i+1));
        var minIndex = indexOfMinimum(array, i);
        swap(array, i, minIndex);
            line((20*(minIndex+1))+canvasX, (30*i)+35, (20*(i+1))+canvasX, (30*i)+45);
    }
    text(array, 20+canvasX, 30 * (i+1));
};

textSize(14);
fill(0, 0, 0);

var array = [22, 11, 99, 88, 9];
selectionSort(array, -15);
array = [50, 40, 30, 20, 10];
selectionSort(array, 85);
array = [32, 11, 33, 15, 71];
selectionSort(array, 185);
array = [88, 77, 33, 22, 11];
selectionSort(array, 285);

println(array);
*/
