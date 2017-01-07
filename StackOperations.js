var top =-1;
var maxStackSize =10;
var stack =[];
function  push(data){
  if(top==maxStackSize-1){
    return 'Stack full';
  }else{
    return stack[++top]=data;
  }
}

function pop(){
  if(top==-1){
    return 'Stack Empty';
  }else{
    return stack[top--];
  }
}

function display(){
  if(top!==-1){
    for(var i=0 ; i<=top ; i++){
      console.log(stack[i]);
    }
  }
}

console.log(pop());
push(5);
push(10);
push(14);
display();
console.log('top' ,top);
pop();
console.log('top = ' ,top);
display();
