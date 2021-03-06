/*

Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1,
and return them in any order.

The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list
of all nodes j for which the edge (i, j) exists.

Example:

Input: [[1,2], [3], [3], []]
Output: [[0,1,3],[0,2,3]]
Explanation: The graph looks like this:

0--->1
|    |
v    v
2--->3

There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

Note:

The number of nodes in the graph will be in the range [2, 15].
You can print different paths in any order, but you should keep the order of nodes inside one path.

*/


/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const solutions = []

    function dfs(node, target, history = [], seen = {}) {
        if (node === target) {
            solutions.push([...history, node])
            return
        }

        for (let nextNode of graph[node]) {
            if (seen.hasOwnProperty(nextNode)) {
                continue
            }

            dfs(nextNode, target, [...history, node], { ...seen, [node]: true })
        }
    }

    dfs(0, graph.length - 1)
    return solutions
}


/**
 * TRUE RECURSIVE SOLUTION
 **
var allPathsSourceTarget = function(graph) {
    return dfs(0, graph.length - 1, graph)
};

function dfs(node, target, graph, history = [], seen = {}) {
    if (node === target) {
        return [[...history, node]]
    }

    let childSolutions = []

    for (let nextNode of graph[node]) {
        if (seen[nextNode]) {
            continue
        }

        const nextHistory = [...history, node]
        const nextSeen = {
            ...seen,
            [node]: true,
        }
        childSolutions = [...childSolutions, ...dfs(nextNode, target, graph, nextHistory, nextSeen)]
    }

    return childSolutions
}

*/



/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(allPathsSourceTarget([[1,2],[3],[3],[]]))
