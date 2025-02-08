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
const arr = [1,2,1,2,1,1,1,3]
const m = 2
const k = 2
const containsPattern = function (arr, m, k) {
    // 先按m的长度分组
    let groups = []
    while (arr.length) {
        groups.push(arr.splice(0, m))
    }
    console.log("🚀 ~ containsPattern ~ groups:", groups)
    for (let i = 0; i < groups.length; i++) {
        let count = 0
        for (let j = i + 1; j < groups.length; j++) {
            console.log(groups[i], groups[j])
            if (groups[i].join('') == groups[j].join('')) {
                count++
            }
        }
        if (count >= k) {
            return true
        }
    }
    return false


    // 然后判断每个分组是否有k个
    // 如果有k个，返回true

};
console.log(containsPattern(arr, m, k)) // true