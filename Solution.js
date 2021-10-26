
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {

    //alternatively: if (head !== null || head.next !== null)
    if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head;

    //alternatively: if (head !== null && head.next !== null)
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}
