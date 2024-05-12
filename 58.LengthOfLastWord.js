/**
 * @param {string} s
 * @return {number}
 */
const s = "   fly me   to   the moon  "

var lengthOfLastWord = function (s) {
    const result = s.split(' ').filter((item) => item !== '');
    return result[result.length - 1].length
};
console.log(lengthOfLastWord(s))