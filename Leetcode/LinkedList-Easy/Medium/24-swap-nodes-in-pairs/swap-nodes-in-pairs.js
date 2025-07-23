/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head ||!head.next) return head

    let dummy = new ListNode()
        dummy.next = head 
    let prev = dummy
    let first = head
    let second = head.next 
    while(first && first.next) {
        prev.next = first.next
        first.next = second.next
        second.next = first

        prev = first
        first = prev.next
        second = first && first.next

    } return dummy.next
};