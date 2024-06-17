/**
 * @param {number[][]} mat
 * @return {number[]}
 */

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const output = [1, 2, 4, 7, 5, 3, 6, 8, 9];

const findDiagonalOrder = function (mat) {
  if (mat.length == 0) return mat;

  let m = mat.length;
  let n = mat[0].length;

  let row = 0;
  let col = 0;
  let d = 1;
  let result = [];

  for (let i = 0; i < m * n; i++) {
    result.push(mat[row][col]);
    row -= d;
    col += d;
    if (row >= m) {
      row = m - 1;
      col += 2;
      d = -d;
    }
    if (col >= n) {
      col = n - 1;
      row += 2;
      d = -d;
    }
    if (row < 0) {
      row = 0;
      d = -d;
    }
    if (col < 0) {
      col = 0;
      d = -d;
    }
  }

  return result;
};

// const findDiagonalOrder2 = function (mat) {
//     if (mat.length === 0) return [];
//     const m = mat.length;
//     const n = mat[0].length;
//     const result = [];
//     let row = 0, col = 0, d = 1;

//     for (let i = 0; i < m * n; i++) {
//         result.push(mat[row][col]);
//         row -= d;
//         col += d;

//         if (row >= m) { row = m - 1; col += 2; d = -d; }
//         if (col >= n) { col = n - 1; row += 2; d = -d; }
//         if (row < 0)  { row = 0; d = -d; }
//         if (col < 0)  { col = 0; d = -d; }
//     }

//     return result;
// };

console.log(findDiagonalOrder(mat));
