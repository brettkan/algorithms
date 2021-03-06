/*

Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently
occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
 

For example:

Given BST [1,null,2,2],

   1
    \
     2
    /
   2
 
return [2].

Note: If a tree has more than one mode, you can return them in any order.

Follow up: Could you do that without using any extra space? (Assume that the implicit stack space
incurred due to recursion does not count).

*/


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    const valuesMap = new Map()
    const queue = [root]

    while (queue.length) {
        let currentNode = queue.shift()
        valuesMap.set(currentNode.val, (valuesMap.get(currentNode.val) || 0) + 1)
        if (currentNode.left) { queue.push(currentNode.left) }
        if (currentNode.right) { queue.push(currentNode.right) }
    }

    let maxVals = []
    let maxCount = 0
    for (let [value, count] of valuesMap) {
        if (count > maxCount) {
            maxVals = [value]
            maxCount = count
        } else if (count === maxCount) {
            maxVals.push(value)
        }
    }

    return maxVals
};


/**
 * HELPERS
 **/

//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * TEST CASES
 **/

const node1 = new TreeNode(4)
const node2 = new TreeNode(2)
const node3 = new TreeNode(2)
node1.right = node2
node2.left = node3

console.log(findMode(node1), 'and answer should be [2]')
