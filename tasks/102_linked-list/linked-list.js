/* eslint "require-jsdoc": 0 */
export class LinkedList {
  constructor() {
    this.amount = 0;
    this.head = null;
    this.tail = null;
  }
  amount() {
    return this.amount === 0;
  }
  push(value) {
    let node = new Node(value);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.amount++;
  }
  pop() {
    if (this.tail === null) {
      return;
    }
    let result = this.tail.value;

    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
      this.amount--;
      return result;
    }
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    this.amount--;
    return result;
  }
  iterate(callback) {
    let currentNode = this.head;
    while (currentNode !== null) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
  }
  insertAfter(value, valueToInsert) {
    let currentNode = this.head;
    /* eslint-disable-next-line */
    while (true) {
      if (currentNode.value === value) {
        let node = new Node(valueToInsert);
        node.prev = currentNode;
        node.next = currentNode.next;
        currentNode.next.prev = node;
        currentNode.next = node;
        this.amount++;
        break;
      }
      if (currentNode.next === null) {
        return false;
      }
      currentNode = currentNode.next;
    }
  }
  removeItem(value) {
    let currentNode = this.head;
    /* eslint-disable-next-line */
    while (true) {
      if (currentNode.value === value) {
        this.amount--;
        if (currentNode === this.head) {
          this.head.next.prev = null;
          this.head = this.head.next;
          return true;
        }
        if (currentNode === this.tail) {
          this.tail.prev.next = null;
          this.tail = this.tail.prev;
          return true;
        }
        currentNode.next.prev = currentNode.prev;
        currentNode.prev.next = currentNode.next;
        currentNode.next = null;
        currentNode.prev = null;
        return true;
      }
      if (currentNode.next === null) {
        return false;
      }
      currentNode = currentNode.next;
    }
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
