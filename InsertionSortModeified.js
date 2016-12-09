var insert = function(array, rightIndex, value) {
    var i;
    for(i=rightIndex; i>=0 && array[i] > value ; i--){
       array[i+1] = array[i];
    }
    array[i+1]=value;
};

var insertionSort = function(array) {
for(var i =0 ; i< array.length-1 ; i++){
 insert(array , i , array[i+1]);
}
};


var array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2);
console.log("Array after inserting 2:  " , array);


insert(array, 5, 9);
console.log("Array after inserting 9:  " , array);


insert(array, 6, 6);
console.log("Array after inserting 6:  " , array);


var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log("Array after sorting:  " , array);
