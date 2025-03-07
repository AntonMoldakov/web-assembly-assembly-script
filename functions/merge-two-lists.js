export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

export const mergeTwoListsJs = function (list1, list2) {
  let list = new ListNode(0);
  let op = list;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      op.next = list1;
      list1 = list1.next;
    } else {
      op.next = list2;
      list2 = list2.next;
    }

    op = op.next;
  }

  op.next = list1 || list2;

  return list.next;
};
