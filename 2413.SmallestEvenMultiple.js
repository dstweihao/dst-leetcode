/**
 * @param {number} n
 * @return {number}
 */

const n = 5
// 给你一个正整数 n ，返回 2 和 n 的最小公倍数（正整数）。

const smallestEvenMultiple = function (n) {

    if (n >= 2 && n % 2 == 0) {
        return n
    }

    if (n % 2 != 0) {
        return n * 2
    }

};

console.log(smallestEvenMultiple(n))