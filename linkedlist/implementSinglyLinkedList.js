// Build a Singly LinkedList from scratch ✅
// 1-->2-->3-->4-->5-->null
// Each Node Structure
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class myLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Method to insert a new node at the head of the list
  insertAtHead(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    // If we have just one node in the list, make the newnode the tail also 
    if (newNode.next === null) this.tail = newNode;

    this.length++;
  }

  // Method to insert a new node at the end of the list
  insertAtTail(value) {
    const newNode = new Node(value);

    // if there is no head then the list is empty, so insert the node in the head.
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // Get the current tail then point it to the new node
    const currentTail = this.tail;

    if (currentTail) {
      this.tail.next = newNode;
    }

    // Make the new Node the tail
    this.tail = newNode;

    this.length++;
  }

  // Method to get a node at a specific index in the list
  getNode(index) {
    let counter = 0;
    let currentNode = this.head;

    // Loop through the list from the currentNode which is initially the head, then return the node when the index === counter
    while (currentNode) {
      if (index === counter) {
        return currentNode;
      }

      currentNode = currentNode.next;
      counter++;
    }
  }

  // Method to insert a new node at a specific index in the list
  insertAt(index, value) {
    const newNode = new Node(value);

    // Insert at the head if the index is 0
    if (index === 0) {
      this.insertAtHead(value);
      return;
    }

    // Insert at the tail if the index is the last item on the list or is more than the length of the list
    if (index === this.length - 1 || index > this.length) {
      this.insertAtTail(value);
      return;
    }

    // Get the previous node before the index you are inserting at
    let previousNode = this.getNode(index - 1);
    let nextNode = previousNode.next;

    previousNode.next = newNode;
    newNode.next = nextNode;

    this.length++;
  }

  // Method to delete an existing node at the head of the list
  deleteAtHead() {
    // Return null if the list is empty
    if (!this.head) {
      return null;
    }

    // Turn the head to the next value after the head
    this.head = this.head.next;

    this.length--;
  }

  // Method to delete a node at the tail of the list
  deleteAtTail() {
    // Return null if the list is empty
    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      this.head = null;
    }

    // Get the node before the tail
    let previousNode = this.getNode(this.length - 2);

    previousNode.next = null;
    this.tail = previousNode;

    this.length--;
  }

  // Method to delete a node at a specific index in the list
  deleteAt(index) {
    if (index === 0) {
      this.head = this.head.next;
    }

    // Get the previous node before the node you want to delete
    let previousNode = this.getNode(index - 1);
    let deleteNode = previousNode.next;
    let nextValue = deleteNode.next;

    if (!previousNode || !previousNode.next) {
      return;
    }

    previousNode.next = nextValue;

    if (index === this.length - 1) {
      let previousTail = this.getNode(this.length - 2);

      previousNode.next = null;

      this.tail = previousTail;
    }

    this.length--;
  }
}

const result = new myLinkedList();
result.insertAtHead(1);
result.insertAtTail(3);
result.insertAt(1, 7);
result.deleteAtHead();
result.deleteAtTail();
result.deleteAt(1);
console.log(result);
