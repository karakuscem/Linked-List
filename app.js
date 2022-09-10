class Node {
    constructor(value) {
      this.value = value;
      this.nextNode = null;
    }
  }
  
  class LinkedList {
    constructor(headNode) {
      this.HEAD = headNode;
      this.nextNode = null;
    }

    append(value) {
      let temp = this.HEAD;
      const newNode = new Node(value);

      while(temp.nextNode != null) {
        temp = temp.nextNode;
      }

      temp.nextNode = newNode;
    }

    prepend(value) {
      const newHead = new Node(value);

      newHead.nextNode = this.HEAD;
      this.HEAD = newHead;
    }

    size() {
      let temp = this.HEAD;
      let count = 1;

      while (temp != null) {
        temp = temp.nextNode;
        count++;
      }

      return count;
    }

    head() {
      return this.HEAD.value;
    }

    tail() {
      let temp = this.HEAD;

      while(temp.nextNode != null) {
        temp = temp.nextNode;
      }

      return temp.value;
    }

    at(index) {
      let temp = this.HEAD;
      let count = 0;

      while (count != index){
        temp = temp.nextNode;
        count++;
      }

      return temp.value;
    }

    pop() {
      let temp = this.HEAD;

      while (temp.nextNode.nextNode != null) {
        temp = temp.nextNode;
      }
      temp.nextNode = null;
    }

    contains(value) {
      let temp = this.HEAD;

      while (temp != null && temp.value !== value) {
        temp = temp.nextNode;
      }

      if (temp.value == value) {
        return true;
      } else {
        return false;
      }
    }

    find(value) {
      let temp = this.HEAD;
      let index = 0;
  
      while (temp != null) {
        if (temp.value == value) return index;
        index++;
        temp = temp.nextNode;
      }
  
      return null;
    }
  
    toString() {
      let temp = this.HEAD;
      let string = "";
  
      while (temp != null) {
        console.log(temp.value);
        string += `(${temp.value}) -> `;
        temp = temp.nextNode;
      }
  
      string += "(null)";
  
      return string;
    }
  
    insertAt(value, index) {
      let temp = this.HEAD;
      let tempNext;
      let count = 1;
      let newNode = new Node(value);
  
      if (index == 0) {
        newNode.nextNode = temp;
        this.HEAD = newNode;
        return;
      }
  
      while (temp != null) {
        if (count == index) {
          tempNext = temp.nextNode;
          temp.nextNode = newNode;
          newNode.nextNode = tempNext;
          return;
        }
  
        count++;
        temp = temp.nextNode;
      }
    }
  
    removeAt(index) {
      if (index === 0) {
        const valueOfRemoved = this.HEAD.value;
        this.HEAD = this.HEAD.nextNode;
        return valueOfRemoved;
      }
  
      const nodeBeforeRemovedOne = this.at(index - 1);
      const valueOfRemoved = nodeBeforeRemovedOne.nextNode.value;
      nodeBeforeRemovedOne.nextNode = nodeBeforeRemovedOne.nextNode.nextNode;
  
      return valueOfRemoved;
    }
}

const list = new LinkedList();
console.log(list.prepend(1));
console.log(list.append(2));
console.log(list.append(3));
console.log(list.append(4));
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(2));
console.log(list.pop());
console.log(list.contains(3));
console.log(list.find(2));
console.log(list.toString());