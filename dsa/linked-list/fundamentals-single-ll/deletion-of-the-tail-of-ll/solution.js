// Solution for: Deletion of the tail of LL
/*Definiton of singly Linked List
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
*/

class Solution {
  deleteTail(head) {
    if (!head || !head.next) return null;
    let temp = head;
    while (temp.next.next) {
      temp = temp.next;
    }
    temp.next = null;
    return head;
  }
}
