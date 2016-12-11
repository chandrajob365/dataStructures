
function rot13(str) { // LBH QVQ VG!
  var deChiperedTest ='';
  for(var i =0 ; i < str.length ;i++){
    charCode = str.charCodeAt(i);
    if(charCode >=65 && charCode <=90){
      if(charCode>77){
        deChiperedTest += String.fromCharCode(charCode-13);
      }else if(charCode<=77){
        deChiperedTest += String.fromCharCode(charCode+13);
      }
    }else{
      deChiperedTest +=str[i];
    }
  }
  console.log(deChiperedTest);
  return deChiperedTest;
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
