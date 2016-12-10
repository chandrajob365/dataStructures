var computePower = function(base , power){
  console.log("Computing " + base + " raised to power " + power + ".");
  if(power===0){
    return 1;
  }else if(power<0){
    return 1/base * computePower(base , power+1);
  }else{
    return base * computePower(base , power-1);
  }
}

console.log(computePower(5 , 3));
console.log(computePower(3,-8));
