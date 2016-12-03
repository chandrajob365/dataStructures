function Node(data){
  this.data=data;
  this.prev = null;
  this.next = null;
}

function DoublyLinkedList(){
  this._length=0;
  this.head=null;
  this.tail=null;
}

DoublyLinkedList.prototype.add = function(data){
  var node = new Node(data);
  currentNode = this.head;
  /*console.log("---- ENTRY ------");
  console.log(currentNode);
  console.log("------ HEAD ------");
  console.log(this.head);*/
  if(!currentNode){
    this.head = this.tail = node;
    this._length++;
    return;
  }else{
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    node.prev = currentNode;
    node.next=null;
    this.tail=node;
    console.log("----- EXIT ------");
    console.log(currentNode);
    /*console.log("------ TAIL -----");
    console.log(this.tail);*/
    this._length++;
    return;
  }
}

DoublyLinkedList.prototype.display = function(){
  currentNode = this.head;
  var emptyLinkedList = {value : "!! Empty List !!"};
  if(!currentNode){
    console.log(emptyLinkedList.value);
    return;
  }
  while (currentNode.next) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
  }
  console.log(currentNode.data);
}

DoublyLinkedList.prototype.addAt = function(data,index){
  var node = new Node(data);
  currentNode = this.head;
  var invalidIndexMsg = {message : "Invalid Index : please enter index between 0 and "};
  if(index >= 0 && index <= this._length){
    if(!currentNode){
      this.head=this.tail=node;
      node.next=node.prev=null;
      this._length++;
      return;
    }if(currentNode && index==0){
      this.head = node;
      node.prev=null;
      node.next=currentNode;
      currentNode.prev=node;
      this._length++;
      return;
    }if(index==this._length){ // Insert at tail
      node.next = null;
      node.prev = this.tail;
      this.tail.next = node;
      this.tail=node;
      this._length++;
      return;
    }else{
      var count = 0;
      while(currentNode.next && count < index-1){
        currentNode = currentNode.next;
        count++;
      }
      node.prev = currentNode;
      node.next = currentNode.next;
      currentNode.next.prev = node;
      currentNode.next = node;
      this._length++;
      return;
    }
  }else{
    console.log(invalidIndexMsg.message + (this._length-1));
  }
}

DoublyLinkedList.prototype.remove = function(index){
  currentNode = this.head;
  var invalidIndexMsg = {value:"!!Invalid Index!!"};
  if(!currentNode){
    return;
  }if(index>this._length-1 || index < 0){
    console.log(invalidIndexMsg.value+ " : " + index);
    return ;
  }if(index==0){
    this.head=currentNode.next;
    currentNode.next.prev=null;
    this._length--;
    return;
  }if(index==this._length-1){
    console.log("ENTRY in last : " + this._length);
    this.tail=this.tail.prev;
    this.tail.next=null;
    this._length--;
    return;
  }else{
    var count = 0;
    while(currentNode.next && count < index){
      currentNode = currentNode.next;
      count++;
    }
    currentNode.prev.next=currentNode.next;
    currentNode.next.prev = currentNode.prev;
    this._length--;
    return;
  }
}

DoublyLinkedList.prototype.search = function(index){
  currentNode = this.head;
  var count =0;
  length = this._length;
  message = {failure: 'Failure: non-existent node in this list'};

    if (length === 0 || index < 0 || index >= length) {
        console.log(message.failure + " at index " + index);
    }else{
      while(currentNode.next && count < index){
        currentNode = currentNode.next;
        count++;
      }
      console.log("Element at index "+index +" = "+currentNode.data);
    }
}
var doublyLinkedList1 = new DoublyLinkedList();
doublyLinkedList1.add(2);
doublyLinkedList1.add(6);
doublyLinkedList1.add(10);
doublyLinkedList1.add(20);
doublyLinkedList1.add(30);
doublyLinkedList1.display();
doublyLinkedList1.addAt(33,5);

doublyLinkedList1.display();

doublyLinkedList1.addAt(21,doublyLinkedList1._length-2);
console.log("------ Display AddAt ---------");
doublyLinkedList1.display();
console.log(doublyLinkedList1.tail);
console.log("Length ---> "+doublyLinkedList1._length);
doublyLinkedList1.remove(7);
console.log("----- Removal --------");
doublyLinkedList1.display();
console.log(doublyLinkedList1.tail);
console.log(doublyLinkedList1.head);
doublyLinkedList1.search(-1);
doublyLinkedList1.search(0);
doublyLinkedList1.search(2);
doublyLinkedList1.search(doublyLinkedList1._length-1);
doublyLinkedList1.search(doublyLinkedList1._length);
