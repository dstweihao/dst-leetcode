/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

var mat = [[1, 2]]
var r = 1
var c = 1
var Output = [[1, 2]]

// var mat = [[1, 2], [3, 4]]
// var r = 4
// var c = 1
// var Output = [[1], [2], [3], [4]]

// var mat = [[1, 2], [3, 4]]
// var r = 2
// var c = 2
// var Output2 = [[1, 2], [3, 4]]

var matrixReshape = function (mat, r, c) {
    let allNums = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            allNums.push(mat[i][j])
        }
    }
    if (allNums.length !== r * c) {
        return mat
    }
    let resultValue = []
    while (allNums.length > 0) {
        resultValue.push(allNums.splice(0, c))
    }
    return resultValue
}

console.log(matrixReshape(mat, r, c))