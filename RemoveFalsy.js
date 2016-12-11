//NOTE : Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
var newArr = arr.filter(function(value){
    return value == false ? '':value;
});
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([1, null, NaN, 2, undefined]));
