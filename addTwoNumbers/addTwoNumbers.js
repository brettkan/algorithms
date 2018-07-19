/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return getNumberFromNode(l1) + getNumberFromNode(l2)
};

function getNumberFromNode(node) {
    return Number(getStringNumberFromNode(node))
}

function getStringNumberFromNode(node) {
    if (!node) {
        return ''
    }

    return getNumberFromNode(node.next) + node.val.toString()
}

// function getNumberFromNodeIterative(node) {
//     let stringNum = ''
//     for (let current = node; current; current = current.next) {
//         stringNum = current.val + stringNum
//     }
//     return Number(stringNum)
// }

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const nodeOne1 = new ListNode(2)
const nodeOne2 = new ListNode(4)
nodeOne1.next = nodeOne2
const nodeOne3 = new ListNode(3)
nodeOne2.next = nodeOne3

const nodeTwo1 = new ListNode(5)
const nodeTwo2 = new ListNode(6)
nodeTwo1.next = nodeTwo2
const nodeTwo3 = new ListNode(4)
nodeTwo2.next = nodeTwo3

console.log(addTwoNumbers(nodeOne1, nodeTwo1))

