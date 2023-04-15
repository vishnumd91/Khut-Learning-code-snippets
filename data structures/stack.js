class Stack {
  constructor() {
    this.element = [];
  }
  push(item) {
    this.element.push(item);
    return this.element;
  }
  pop() {
    return this.element.pop();
  }
  peek() {
    return this.element[this.element.length - 1];
  }
  length() {
    return this.element.length;
  }
}

const stack = new Stack();
stack.push(7);
stack.push(3);
stack.push(5);

stack.pop();

console.log(stack.peek());
