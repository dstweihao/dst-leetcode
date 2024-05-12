/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
const n = 4
const preferences = [
    [1, 2, 3],
    [3, 2, 0],
    [3, 1, 0],
    [1, 2, 0]]
const pairs = [
    [0, 1],
    [2, 3]
]
/**
 * 
输出：2
解释：
朋友 1 不开心，因为：
- 1 与 0 配对，但 1 与 3 的亲近程度比 1 与 0 高，且
- 3 与 1 的亲近程度比 3 与 2 高。
朋友 3 不开心，因为：
- 3 与 2 配对，但 3 与 1 的亲近程度比 3 与 2 高，且
- 1 与 3 的亲近程度比 1 与 0 高。
朋友 0 和 2 都是开心的。
 */
const unhappyFriends = function (n, preferences, pairs) {

};

console.log(unhappyFriends(n, preferences, pairs))