/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
const queens = [[0, 1], [1, 0], [4, 0], [0, 4], [3, 3], [2, 4]], king = [0, 0]
const out = [[0, 1], [1, 0], [3, 3]]
const queensAttacktheKing = function (queens, king) {
    // 初始化棋盘
    const board = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => null))
    // 将皇后的位置在棋盘上显示
    queens.forEach(q => {
        board[q[0]][q[1]] = 'Q'
    })
    let res = []
    // 定义八个方向，用于从坐标轴顺时针依次遍历
    const direction = [
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1]
    ]

    for (const element of direction) {
        const [dx, dy] = element
        let x = king[0] + dx
        let y = king[1] + dy
        while (x >= 0 && x < 8 && y >= 0 && y < 8) {
            if (board[x][y] === 'Q') {
                res.push([x, y])
                break
            }
            x += dx
            y += dy
        }

    }
    return res
};

