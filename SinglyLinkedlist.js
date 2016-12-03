function Node(data){
this.data = data;
this.next = null;
}
 function SinglyLinkedList(){
 this.head=null;
 this._length =0;
 }

 SinglyLinkedList.prototype.add = function(data){
 var node = new Node(data);
 currentNode = this.head;
  if(!currentNode){
    this.head=node;
    this._length++;
    return node;
  }
  while(currentNode.next){
  currentNode = currentNode.next;
  }
  currentNode.next = node;
  this._length++;
 }

SinglyLinkedList.prototype.display = function(){
  currentNode = this.head;
  var emptyLinkedList = {value : "!! Empty List !!"};
  if(!currentNode){
    console.log(emptyLinkedList.value);
    return;
  }
  while(currentNode.next){
  console.log(currentNode.data);
  currentNode = currentNode.next;
  }
  console.log(currentNode.data);
 }

SinglyLinkedList.prototype.remove = function(index){
  currentNode = this.head;
  var invalidIndexMsg = {value:"!!Invalid Index!!"};
  if(!currentNode){
    return;
  }if(index>this._length-1 || index <0){
    console.log(invalidIndexMsg.value+ " : " + index);
    return ;
  }if(index==0){
    this.head = currentNode.next;
    this._length--;
    return;
  }else{
    for(var i =0 ; i<index-1; i++){
      currentNode = currentNode.next;
    }
  }
      var tempNode = currentNode.next;
      currentNode.next = tempNode.next;
      this._length--;
}


SinglyLinkedList.prototype.addAt = function(data,index){
  var node = new Node(data);
  currentNode = this.head;
  if(index >= 0 && index <= this._length ){
    if(!currentNode){
      this.head=node;
      this._length++;
      return;
    }if(currentNode && index==0){
      this.head = node;
      node.next = currentNode;
      this._length++;
      return;
    }else{
      /*for(var i =0 ; i<index ; i++){
        currentNode = currentNode.next;
      }*/
      var count =0;
      while(currentNode.next!==null && count<index-1){
        currentNode = currentNode.next;
        count++;
      }
      //console.log(currentNode.data);
      node.next=currentNode.next;
      currentNode.next=node;
      this._length++;
      return;
    }
  }
}

SinglyLinkedList.prototype.search = function(index){
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
 var linkedList1 = new SinglyLinkedList();
 linkedList1.add(24);
 linkedList1.add(48);
 linkedList1.add(78);
 linkedList1.add(96);
 linkedList1.add(105);
 linkedList1.add(305);
 linkedList1.display();

 linkedList1.remove(5);
 console.log("----- Display After removal of node at index 0 -----");
 linkedList1.display();
 linkedList1.addAt(310,5);
 console.log("----- Display after addAt 5 -----");
 linkedList1.display();

 linkedList1.add(540);
 console.log("----- Display after adding 540 -----");
 linkedList1.display();

 linkedList1.search(-1);
 linkedList1.search(0);
 linkedList1.search(3);
 linkedList1.search(5);
 linkedList1.search(6);
 /*linkedList1.remove(-1);
 console.log("----- Display After removal of node at index -1 -----");
 linkedList1.display();*/
