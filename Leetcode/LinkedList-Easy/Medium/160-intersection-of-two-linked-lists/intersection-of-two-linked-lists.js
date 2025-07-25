/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    let n = 0
    let pA = headA
    let pB = headB
    while (pA) {
        n++
        pA = pA.next
    }
    let m = 0
    while (pB) {
        m++
        pB = pB.next
    }
    let diff = Math.abs(n - m)
    if (n > m) {
        let temp = headA
        headA = headB
        headB = temp
    }
    // move b as equal to a
    for (let i = 0; i < diff; i++) {
        headB = headB.next
    }
    pA = headA
    pB = headB

    while (pA != pB) {
        pA = pA.next
        pB = pB.next
    } return pA
};   