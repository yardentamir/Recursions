class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySeachTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}
let ins = new Node();
// console.log(ins)
let answer = new BinarySeachTree();
answer.insert(20);
answer.insert(1);
answer.insert(4);
answer.insert(6);
answer.insert(8);
answer.insert(3);
answer.insert(4);

function printPreorder(node) {
  if (node == null) return;
  console.log(node.value);
  printPreorder(node.left);
  printPreorder(node.right);
}
printPreorder(answer.root);
