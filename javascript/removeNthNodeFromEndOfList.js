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
	let start = new ListNode(0, head);
	let slow = start;
	let fast = start;

	for (let i = 0; i < n; i++) {
		fast = fast.next;
	}

	while (fast.next != null) {
		slow = slow.next;
		fast = fast.next;
	}
	slow.next = slow.next.next;

	return start.next;
};
