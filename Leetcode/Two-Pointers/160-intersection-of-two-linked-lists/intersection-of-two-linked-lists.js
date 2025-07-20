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
var getIntersectionNode = function(headA, headB) {
    let arrA = []
    let arrB = []

    while(headA) {
        arrA.push(headA)
        headA = headA.next
    }
    while(headB) {
        arrB.push(headB)
        headB = headB.next
    }

    for(let i = 0; i < arrA.length; i++){
        for(let j =0; j < arrB.length; j++) {
            if(arrA[i] === arrB[j]){
                return arrA[i]
            }
        }
    } return null
    
};