// Solution for: Traversal in Linked List
/*Definition of singly linked list:
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
*/

class Solution {
    LLTraversal(head) {
        let arr = []
        while(head) {
          arr.push(head.val)
          head = head.next
          
        }
       return arr
    }
}