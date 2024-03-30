/**
 * @param {number[]} values
 * @return {number}
 */
/**
 * 
 * 输入：values = [8,1,5,2,6]
   输出：11
   解释：i = 0, i = 2, values[i] + values[i] + i - i = 8 + 5 + 0 - 2 = 11
 */
const values = [8, 1, 5, 2, 6]

const maxScoreSightseeingPair = function (values) {
    let maxValue = 0
    let maxPrev = values[0] // 记录前面位置能够得到的最大得分

    for (let i = 1; i < values.length; i++) {
        maxValue = Math.max(maxValue, maxPrev + values[i] - i) // 计算当前位置的得分
        maxPrev = Math.max(maxPrev, values[i] + i) // 更新前面位置能够得到的最大得分
    }
    return maxValue
}
console.log(maxScoreSightseeingPair(values))