/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

/**
 * 
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
   输出：[[1,4,7],[2,5,8],[3,6,9]]
 */

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

var transpose = function (matrix) {
    var resultArr = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            // 如果是undefined，则赋值[]
            if (!resultArr[j]) {
                resultArr[j] = []
            }
            resultArr[j].push(matrix[i][j])
        }
    }
    return resultArr
}
console.log(transpose(matrix))
