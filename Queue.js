var rear = front = -1
var maxQueueSize = 4;
var queue = [];

function enqueue(data){
  if(rear == maxQueueSize-1){
    return 'Queue full . No room to accomodate ' + data;
  }else if(rear==-1 && front==-1){
    rear = front = 0;
  }else{
    rear++;
  }
  queue[rear]=data;
}

function dequeue(){
  if(rear==-1 && front==-1){
    return 'Queue Empty..'
  }else if(rear==front){
    rear=front=-1;
  }else{
    front++;
  }
  return queue[front];
}

function display(){
  console.log('Rear = ' , rear ,' Front = ' , front);
  if(rear == -1 && front == -1){
    console.log('Empty Queue..');
  }else{
    for(var i = front ; i <= rear ; i++){
      console.log(queue[i]);
    }
  }
}


display();
console.log('------Enqueue------');
enqueue(10);
enqueue(20);
enqueue(30);
enqueue(40);
console.log(enqueue(50));
display();
console.log('-------Dequeue------');
dequeue();
display();
console.log('-------Dequeue------');
dequeue();
display();
console.log('-------Dequeue------');
dequeue();
display();
console.log('-------Dequeue------');
dequeue();
display();
console.log('-------Dequeue------');
dequeue();
display();
