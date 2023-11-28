/**
 * @param {number[]} nums
 * @return {number}
 */


let nums = [1, 2, 3]
let val = 3

// 给你一个长度为 `n` 的整数数组，每次操作将会使 `n - 1` 个元素增加 `1` 。返回让数组所有元素相等的最小操作次数。
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

var minMoves = function (nums) {
    nums.forEach(item => {
        console.log(item)
    });
};

minMoves(nums)