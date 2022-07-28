/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let arr = []
    let headNode = head
    while (headNode) {
        arr.push(headNode.val)
        headNode = headNode.next
    }
    
    let arrReverse = []
    for (let i = arr.length - 1; i >= 0; i--) {
        arrReverse.push(arr[i])
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arrReverse[i]) {
            return false
        }
    }
    return true
};