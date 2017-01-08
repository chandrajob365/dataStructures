function multiply(a){
  return function(b){
    return a*b;
  };
}

console.log(multiply(5)(6));

var person ={
  name : 'manish',
  age : 28
}

function display(){
  console.log(this.name + '  ' + this.age);
}

display.bind(person)();
