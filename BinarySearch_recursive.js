function BIN_SEARCH(sorted_array,search_element){
  var min = 0 ;
  var max = sorted_array.length-1;
  if(max>min){
    var tempArray =[];
    var avg = Math.floor((max+min)/2);
    if(sorted_array[avg]==search_element){
      return avg;
    }else if(sorted_array[avg]<search_element){
      min = avg+1;
      tempArray = createArray(min , max , sorted_array);
      BIN_SEARCH(tempArray , search_element);
    }else{
      max = avg-1;
      tempArray = createArray(min , max , sorted_array);
      BIN_SEARCH(tempArray , search_element);
    }
  }
  return -1;
}

function createArray(min, max , sortedArray){
  var tempArray = {};
  
  for(var i =min ,j=0 ; i<=max ; i++,j++){
    
    tempArray[j]=sortedArray[i];
  }
  return tempArray;
}

var sorted_array = [4,6,8,10,14,13,17,19];
var search_element=17;
var res = BIN_SEARCH(sorted_array , search_element);
console.log(res);

/*
Exception: SyntaxError: missing : after property id
@Scratchpad/1:30
*/