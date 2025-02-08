/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
/**
 * 
输入：arr = [1,2,4,4,4,4], m = 1, k = 3
输出：true
解释：模式 (4) 的长度为 1 ，且连续重复 4 次。注意，模式可以重复 k 次或更多次，但不能少于 k 次。
示例 2：
 */
const arr = [2, 2, 2, 2]
const m = 2
const k = 3
const containsPattern = function (arr, m, k) {
    const n = arr.length; // 获取数组的长度
    if (n < m * k) return false; // 如果数组长度小于 m * k，直接返回 false，因为无法存在足够多的元素形成模式

    for (let i = 0; i <= n - m * k; i++) { // 遍历所有可能的模式起始位置 i
        let valid = true; // 标志当前起始位置是否形成有效模式

        for (let j = 1; j < k; j++) { // 检查从第 2 个模式到第 k 个模式
            for (let pos = 0; pos < m; pos++) { // 遍历模式的每个位置
                const currentPos = i + j * m + pos; // 当前比较的位置
                const patternPos = i + pos; // 模式基准位置

                if (arr[currentPos] !== arr[patternPos]) { // 如果当前元素与模式元素不匹配
                    valid = false; // 标记为无效模式
                    break; // 跳出循环
                }
            }
            if (!valid) break; // 如果模式无效，跳出当前循环
        }

        if (valid) return true; // 如果发现有效模式，返回 true
    }

    return false; // 遍历完所有可能的起始位置后，未发现有效模式，返回 false

};
console.log(containsPattern(arr, m, k)) // true