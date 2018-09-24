/*

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.

Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false

*/


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const memo = {}
    function backtrack (str, start) {
        if (start === str.length) {
            return true
        }

        if (memo[start]) {
            return memo[start]
        }

        for (let end = start + 1; end <= str.length; end++) {
            if (wordDict.includes(str.slice(start, end)) && backtrack(str, end)) {
                return memo[str] = true
            }
        }

        return memo[str] = false
    }

    return backtrack(s, 0)
};

/**
 * HELPERS
 **/



/**
 * TEST CASES
 **/

console.log(wordBreak('leetcode', ["leet", "code"]), 'and output should be true')
console.log(wordBreak('applepenapple', ["apple", "pen"]), 'and output should be true')
console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]), 'and output should be false')
console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat", "an"]), 'and output should be true')


