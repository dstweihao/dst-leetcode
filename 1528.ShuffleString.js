/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const s = "codeleet";
const indices = [4, 5, 6, 7, 0, 2, 1, 3];
const restoreString = function (s, indices) {
  let result = "";
  for (let i = 0; i < indices.length; i++) {
    result += s[indices.indexOf(i)];
  }
  return result;
};
console.log(restoreString(s, indices));
