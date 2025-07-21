/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // create sentinel
    let sentinel = new ListNode()
    sentinel.next = head
    let first = sentinel, second = sentinel;

    // move first ahead of n 
    for(let i =0; i <n; i++ ) {
        first = first.next
    }
    // move the second pointer till first
    while(first.next){
        second = second.next
        first = first.next
    }
    second.next = second.next.next
    return sentinel.next
};