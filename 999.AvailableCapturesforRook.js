/**
 * @param {character[][]} board
 * @return {number}
 */

var board =

    [[".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "B", ".", ".", ".", "."],
    [".", "p", "B", "R", "p", "B", "p", "."],
    [".", ".", ".", "p", "p", ".", ".", "."],
    [".", ".", ".", "B", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]]
    

var numRookCaptures = function (board) {
    var x = 0
    var y = 0
    outer:
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == 'R') {
                x = j
                y = i
                break outer
            }
        }
    }
    let count = 0
    for (let i = x; i >= 0; i--) {
        if (board[y][i] === 'B') {
            break
        }
        if (board[y][i] === 'p') {
            count += 1
            break
        }
    }
    for (let i = x; i < 8; i++) {
        if (board[y][i] === 'B') {
            break
        }
        if (board[y][i] === 'p') {
            count += 1
            break
        }
    }
    for (let i = y; i >= 0; i--) {
        if (board[i][x] === 'B') {
            break
        }
        if (board[i][x] === 'p') {
            count += 1
            break
        }
    }
    for (let i = y; i < 8; i++) {
        if (board[i][x] === 'B') {
            break
        }
        if (board[i][x] === 'p') {
            count += 1
            break
        }
    }
    return count
}


