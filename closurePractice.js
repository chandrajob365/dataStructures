
//addSix(10); // returns 16
//addSix(21); // returns 27

function createBase(n){
  return function(m){
    return n+m;
  };
}
var addSix = createBase(6);

console.log(addSix(10));
console.log(addSix(21));
