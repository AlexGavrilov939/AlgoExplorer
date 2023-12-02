/**
 * Definition for singly-linked list.
 * */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function middleNode(head: ListNode | null): ListNode | null {
  let fp: ListNode | null = head;
  while (head?.next) {
    head = head.next.next;
    fp = fp!.next;
  }

  return fp;
}
