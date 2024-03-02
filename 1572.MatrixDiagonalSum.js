/**
 * @param {number[][]} mat
 * @return {number}
 */
// var mat = [[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]]

// 对角线的和为：1 + 5 + 9 + 3 + 7 = 25
// var mat = [

//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1]]

// [
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1]
// ]

var diagonalSum = function (mat) {

    // 设置总和值
    let sumValue = 0
    for (let i = 0; i < mat.length; i++) {
        // 遍历相加
        sumValue = sumValue + mat[i][i] + mat[i][mat.length - 1 - i]
    }
    // 如果mat长度是奇数，会出现中心值相加两次的情况，所以这里要减去一次。
    if (mat.length % 2 == 1) {
        // 获取数组中间下标值，减去1除以2加上1就是中间值，但是因为下标是0开始的，所以减去1
        let coreIndex = ((mat.length - 1) / 2) + 1 - 1
        sumValue = sumValue - mat[coreIndex][coreIndex]
    }
    return sumValue
}
diagonalSum(mat)
