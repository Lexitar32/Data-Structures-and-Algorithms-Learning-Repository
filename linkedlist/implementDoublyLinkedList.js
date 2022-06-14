// Task
// Build a Doubly Linked List (✅)

class Node {
    constructor(value, next = null, prev = null) {
      this.value = value,
      this.next = next,
      this.prev = prev
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null,
      this.tail = null,
      this.length = 0
    }
  
    insertAtHead(value) {
      const newNode = new Node(value);
  
      newNode.next = this.head;
  
      if(this.head) {
        this.head.prev = newNode;
      }
      
      this.head = newNode;
  
      if(this.head.next === null) {
        this.tail = newNode;
      }
  
      this.length++;
    }
    
    insertAtTail(value) {
      const newNode = new Node(value);
  
      if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
        return;
      }
  
      let currentTail = this.tail;
  
      if(currentTail) {
        newNode.prev = currentTail;
        currentTail.next = newNode;
        this.tail = newNode;
      }
  
      this.length++;
    }
    
    getNode(index) {
      let counter = 0;
      let currentNode = this.head;
  
      while(currentNode) {
        if(index === counter) {
          return currentNode;
        }
  
        currentNode = currentNode.next;
        counter++;
      }
    }
    
    insertAt(index, value) {
      let newNode = new Node(value);
  
      if(index === 0) {
        this.insertAtHead(value);
        return;
      }
  
      if(index === this.length || index > this.length) {
        this.insertAtTail(value);
        return;
      }
  
      let previousNode = this.getNode(index - 1);
      let nextNode = previousNode.next;
      
      previousNode.next = newNode;
      newNode.prev = previousNode;
      newNode.next = nextNode;
      nextNode.prev = newNode;
  
      this.length++;
    }
    
    deleteAtHead() {
      if(!this.head) {
        return;
      }
  
      let newHead = this.head.next;
  
      this.head = this.head.next;
      newHead.prev = null;
      
      this.length--;
    }
    
    deleteAtTail() {
      if(!this.head) {
        return;
      }
  
      if(!this.head.next) {
        this.head = null;
      }
      
      let previousNode = this.getNode(this.length - 2);
  
      previousNode.next = null;
      this.tail = previousNode;
  
      this.length--;
    }
    
    deleteAt(index) {
      if(index === 0) {
        this.head = this.head.next;
        return;
      }
  
      if(index === this.length - 1) {
        let previousNode = this.getNode(this.length - 2);
  
        previousNode.next = null;
        this.tail = previousNode;
      }
  
      let previousNode = this.getNode(index - 1);
      
      if(!previousNode || !previousNode.next) {
        return;
      }
  
      let deleteNode = previousNode.next;
      let nextValue = deleteNode.next;
  
      previousNode.next = nextValue;
      nextValue.prev = previousNode;
  
      this.length--;
    }
  
    reverseList() {
      
    }
  }
  
  const myLinkedList = new LinkedList();
  myLinkedList.insertAtHead(1);
  myLinkedList.insertAtHead(2);
  // myLinkedList.insertAtTail(3);
  // myLinkedList.insertAt(0, 3);
  // myLinkedList.deleteAtHead();
  // myLinkedList.deleteAtTail();
  // myLinkedList.deleteAt(2);
  
  console.log(myLinkedList)