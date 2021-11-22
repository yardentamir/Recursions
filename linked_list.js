// class ListNode {
//   constructor(value) {
//     this.value = value;
//     // this.maxItems = 10;
//     this.next = null;
//   }
// }
// function addToEnd(head, newItem) {
//   if (!head) return;
//   let current = head;
//   while (current.next) {
//     current = current.next;
//   }
//   current.next = newItem;
// }
// // Receive item and head, add item to start and return new head
// function addToStart(item, head) {
//   item.next = head;
//   return item;
// }
// function logTree(linkedListRoot) {
//   if (!linkedListRoot) return;
//   let current = linkedListRoot;
//   while (current.next) {
//     console.log(current);
//   }
// }
// function removeFirst(linkedListRoot, x) {
//   let current = linkedListRoot;
//   if (linkedListRoot.key === x) {
//     current = linkedListRoot.next;
//     linkedListRoot.next = null;
//     return current;
//   }
//   while (current.next.key !== x) {
//     current = current.next;
//   }
//   // current = 3 -> 4
//   temp = current.next; // temp <=> current.key = 4 -> current.next.key = 5
//   current.next = current.next.next; // 3.next = 3.next.next(5) 3->5
//   temp.next = null; // 4.next = null    0 -> 1 -> 2 -> 3{key,next} -> 4 -> 5
//   return linkedListRoot; //              0 -> 1 -> 2 -> 3 -> 5  // 4
// }
// function logList(linkedListRoot) {
//   let current = linkedListRoot;
//   while (current) {
//     console.log(current);
//     current = current.next;
//   }
// }
// let head = new ListNode(1);
// addToEnd(head, new ListNode(992));
// addToEnd(head, new ListNode(1303));
// addToEnd(head, new ListNode("bobo"));
// addToEnd(head, new ListNode(5));
// console.log("----------add to end----------------");
// console.log(head);
// const item = new ListNode(0);
// head = addToStart(item, head);
// console.log("----------add to start----------------");
// console.log(head);
// console.log(item);
// head = removeFirst(head, 4);
// logList(head);

///--------------///

class Node {
  // constructor
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
// linkedlist class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adds an element at the end of list
  add(element) {
    // creates a new node
    let node = new Node(element);

    // if list is Empty add the element and make it head
    if (this.head == null) this.head = node;
    else {
      // store current node
      let current = this.head;

      // iterate to the end of the list
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = node;
    }
    this.size++;
  }

  // insert element at the position index of the list
  insertAt(element, index) {
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index.");
    else {
      // creates a new node
      let node = new Node(element);
      let curr = this.head;
      let prev;

      // add the element to the first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let it = 0;

        // iterate over the list to find the position to insert
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // adding an element
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  // removes an element from the specified location
  removeFrom(index) {
    if (index < 0 || index >= this.size)
      return console.log("Please Enter a valid index");
    else {
      var curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      // deleting first element
      if (index === 0) {
        this.head = curr.next;
      } else {
        // iterate over the list to the position to remove an element
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // remove the element
        prev.next = curr.next;
      }
      this.size--;

      // return the remove element
      return curr.element;
    }
  }

  // removes a given element from the list
  removeElement(element) {
    let current = this.head;
    let prev = null;

    // iterate over the list
    while (current != null) {
      // comparing element with current element if found then remove the and return true
      if (current.element === element) {
        if (prev == null) this.head = current.next;
        else prev.next = current.next;
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  // finds the index of element
  indexOf(element) {
    var count = 0;
    var current = this.head;

    // iterate over the list
    while (current != null) {
      // compare each element of the list with given element
      if (current.element === element) return count;
      count++;
      current = current.next;
    }

    // not found
    return -1;
  }

  // checks the list for empty
  isEmpty() {
    return this.size == 0;
  }

  // gives the size of the list
  size_of_list() {
    console.log(this.size);
  }

  // prints the list items
  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}

// creating an object for the Linkedlist class
let ll = new LinkedList();

// testing isEmpty on an empty list returns true
console.log(ll.isEmpty());

// adding element to the list
ll.add(10);

// prints 10
ll.printList();

// returns 1
ll.size_of_list();

// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50
ll.printList();

// returns 5
ll.size_of_list();

// prints 50 from the list
console.log("is element removed ?" + ll.removeElement(50));

// prints 10 20 30 40
ll.printList();

// returns 3
console.log("Index of 40 " + ll.indexOf(40));

// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);

ll.printList();

// returns false
console.log("is List Empty ? " + ll.isEmpty());

// remove 3rd element from the list
console.log(ll.removeFrom(3));

// prints 10 20 60 40
ll.printList();
