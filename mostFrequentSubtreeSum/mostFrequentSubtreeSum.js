/*

Given the root of a tree, you are asked to find the most frequent subtree sum. The subtree sum of a
node is defined as the sum of all the node values formed by the subtree rooted at that node (including
the node itself). So what is the most frequent subtree sum value? If there is a tie, return all the
values with the highest frequency in any order.

Example 1
Input:

  5
 /  \
2   -3
return [2, -3, 4], since all the values happen only once, return all of them in any order.

Example 2
Input:

  5
 /  \
2   -5
return [2], since 2 happens twice, however -5 only occur once.
Note: You may assume the sum of values in any subtree is in the range of 32-bit signed integer.

*/


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    const sumCounts = new Map()

    // Get sum counts for tree with DFS search
    function dfsSum(node) {
        if (!node) {
            return 0
        }

        const nodeSum = node.val + dfsSum(node.left) + dfsSum(node.right)
        sumCounts.set(nodeSum, (sumCounts.get(nodeSum) || 0) + 1)

        return nodeSum
    }

    dfsSum(root)

    // Find sums with the highest counts
    let highestSumCount = 0
    let highestSums = []
    for (let [sum, count] of sumCounts) {
        if (count > highestSumCount) {
            highestSumCount = count
            highestSums = [sum]
        } else if (count === highestSumCount) {
            highestSums.push(sum)
        }
    }

    return highestSums
};


/**
 * HELPERS
 **/

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * TEST CASES
 **/
const root1 = new TreeNode(5)
const root2 = new TreeNode(2)
const root3 = new TreeNode(-3)
root1.left = root2
root1.right = root3

const rootA = new TreeNode(5)
const rootB = new TreeNode(2)
const rootC = new TreeNode(-5)
rootA.left = rootB
rootA.right = rootC

const superRoot = new TreeNode(1)
superRoot.left = root1
superRoot.right = rootA



console.log(findFrequentTreeSum(root1), 'and answer is: [2, -3, 4]')
console.log(findFrequentTreeSum(root2), 'and answer is: [2]')
console.log(findFrequentTreeSum(superRoot), 'and answer is: [2]')
