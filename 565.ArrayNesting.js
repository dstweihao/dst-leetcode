/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [5, 4, 0, 3, 1, 6, 2]
const out = 4
/**
 * 
解释: 
A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.
其中一种最长的 S[K]:
S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}

 */
const arrayNesting = function (nums) {
    // 使用visited数组来记录访问过的元素
    let visited = new Array(nums.length).fill(false);
    function getNumValue(index, nums) {
        // 设置count，用于记录最大集合长度
        let count = 0;
        // 直到为false,也就是已访问过，出现重复元素，则跳出循环，返回最大集合长度count
        while (!visited[index]) {
            visited[index] = true;
            index = nums[index];
            count++;
        }
        return count;
    }
    let longestSubArray = 0;
    for (let i = 0; i < nums.length; i++) {
        // 因为前面如果已经访问过，那么后面再次访问时，获取数组长度值一定是比之前的小的。比如当i=0时，触发了后面i=3的递归遍历，当真的执行到i=3时，又重复进行，所以没有意义。
        if (!visited[i]) {
            let subArrayLength = getNumValue(i, nums);
            // 每次遍历，比较大小，获取最大值，赋值给到longestSubArray
            longestSubArray = Math.max(longestSubArray, subArrayLength);
        }
    }
    return longestSubArray;
}
console.log(arrayNesting(nums))