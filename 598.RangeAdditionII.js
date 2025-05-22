/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
/**
 * 思路：
 * 1. 找到最小的m和n
 * 2. 最小的m和n的个数相乘就是最大的数
 * 3. 如果ops为空，那么最大的数就是m*n
 */
const maxCount = function(m, n, ops) {
    // 如果操作组为空，则表示都是0，直接返回m*n
    if (ops.length === 0) {
        return m * n;
    }
    // 找到最小的m和n
    let minM = m;
    let minN = n;
    for (let i = 0; i < ops.length; i++) {
        minM = Math.min(minM,ops[i][0])
        minN = Math.min(minN,ops[i][1])
    }
    // 返回最小的m和n的个数相乘
    return minM * minN;
};