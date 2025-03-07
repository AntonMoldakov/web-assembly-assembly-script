// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function factorial(i: i32): i32 {
  if (i < 0) throw new Error('Factorial undefined for negative numbers');
  if (i === 0) return 1;
  return i * factorial(i - 1);
}

class ListNode {
  val: i32;
  next: ListNode | null;

  constructor(val: i32 = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode(0);
  let current: ListNode = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next!;
  }

  current.next = list1 !== null ? list1 : list2;
  return dummy.next;
}

// Helper functions to create and convert lists from/to arrays from JavaScript

export function createList(arr: i32[]): ListNode | null {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let i = 0; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next!;
  }
  return dummy.next;
}

export function listToArray(head: ListNode | null): i32[] {
  const arr: i32[] = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}
