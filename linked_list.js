class ListNode {
  constructor(value) {
    this.value = value;
    // this.maxItems = 10;
    this.next = null;
  }
}
function addToEnd(head, newItem) {
  if (!head) return;
  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = newItem;
}
// Receive item and head, add item to start and return new head
function addToStart(item, head) {
  item.next = head;
  return item;
}
function logTree(linkedListRoot) {
  if (!linkedListRoot) return;
  let current = linkedListRoot;
  while (current.next) {
    console.log(current);
  }
}
function removeFirst(linkedListRoot, x) {
  let current = linkedListRoot;
  if (linkedListRoot.key === x) {
    current = linkedListRoot.next;
    linkedListRoot.next = null;
    return current;
  }
  while (current.next.key !== x) {
    current = current.next;
  }
  // current = 3 -> 4
  temp = current.next; // temp <=> current.key = 4 -> current.next.key = 5
  current.next = current.next.next; // 3.next = 3.next.next(5) 3->5
  temp.next = null; // 4.next = null    0 -> 1 -> 2 -> 3{key,next} -> 4 -> 5
  return linkedListRoot; //              0 -> 1 -> 2 -> 3 -> 5  // 4
}
function logList(linkedListRoot) {
  let current = linkedListRoot;
  while (current) {
    console.log(current);
    current = current.next;
  }
}
let head = new ListNode(1);
addToEnd(head, new ListNode(992));
addToEnd(head, new ListNode(1303));
addToEnd(head, new ListNode("bobo"));
addToEnd(head, new ListNode(5));
console.log("----------add to end----------------");
console.log(head);
const item = new ListNode(0);
head = addToStart(item, head);
console.log("----------add to start----------------");
console.log(head);
console.log(item);
head = removeFirst(head, 4);
logList(head);
