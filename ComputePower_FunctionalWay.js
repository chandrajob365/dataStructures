var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {
    console.log("Computing " + x + " raised to power " + n + ".");
    // base case
    if(n===0){
        return 1;
    }
    // recursive case: n is negative
    else if(n<0){
      var y = power(x,-n);
       return 1/y;
    } // recursive case: n is odd
    else if(isEven(n) && n > 0){
        var temp = power(x,n/2);
        //console.log("temp : " + temp +" , n = " + n);
        return temp*temp;
    }// recursive case: n is even
    else if(isOdd(n) && n > 0){
           return x * power(x,n-1);
    }


};

var displayPower = function(x, n) {
    console.log(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, -8);
