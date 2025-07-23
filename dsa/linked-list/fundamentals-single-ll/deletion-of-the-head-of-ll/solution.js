// Solution for: Deletion of the head of LL
/*Definiton of singly Linked List
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
*/

class Solution {
    deleteHead(head) {
      if(!head) return head;
      //// Just return the next node, old head will be garbage collected
      return head.next
    } 
}