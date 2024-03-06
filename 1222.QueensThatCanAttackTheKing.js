/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
const queens = [[0, 1], [1, 0], [4, 0], [0, 4], [3, 3], [2, 4]], king = [0, 0]
const out = [[0, 1], [1, 0], [3, 3]]
const queensAttacktheKing = function (queens, king) {
    let result = []
    for (const element of queens) {
        // 判断国王四周，如果x或者y相减为0，意味着与国王位置在一条直线上
        if (Math.abs(element[0] - king[0]) == 0 || Math.abs(element[1] - king[1]) == 0) {
            result.push(element)
        }
        // 判断对角线
        if (Math.abs(element[0] - king[0]) == Math.abs(element[1] - king[1])) {
            result.push(element)
        }

    }
    return result
};

console.log(queensAttacktheKing(queens, king))