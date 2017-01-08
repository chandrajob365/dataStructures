function counter(){
  var count =0;
  return {
    add : function(num){
            count += num;
    },
    retrive : function(){
      return ' current value of counter is ' + count
    }
  }
}

var c = counter();
c.add(5);
c.add(9);
console.log(c.retrive());
