class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (!this.length) {
      this.head = this.tail = null;
    }
    return current;
  }

  shift() {
    this.head = this.head.next;
    this.length--;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  reverse() {
    if (this.length === 0) return null;
    if (this.length === 1) return this;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let [prev, next] = [null, null];
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    console.log(arr);
  }
}

const list = new LinkedList();
list.push(10);
list.push(12);
list.push(13);
list.push(14);
list.push(15);
console.log(list.print());

console.log(list.reverse());

console.log(list.print());
