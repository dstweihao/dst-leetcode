/**
 * @param {number[]} arr
 * @return {boolean}
 */

/**
 * i != j
   0 <= i, j < arr.length
   arr[i] == 2 * arr[j]
 */

// const arr = [7, 1, 14, 11]
// const arr = [-2, 0, 10, -19, 4, 6, -8]
const arr = [0, 0]

const checkIfExist = function (arr) {
  const result = arr.map((m, i) => {
    const index = arr.indexOf(m * 2)
    return index != -1 && index != i
  })
  return result.includes(true)
};
