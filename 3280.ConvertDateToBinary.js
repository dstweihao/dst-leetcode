/**
 * @param {string} date
 * @return {string}
 */
/**
输入： date = "2080-02-29"
输出： "100000100000-10-11101"
解释：
100000100000, 10 和 11101 分别是 2080, 02 和 29 的二进制表示。 
 */
const convertDateToBinary = function(date) {
    const [year, month, day] = date.split('-')
    const yearBinary = parseInt(year).toString(2)
    const monthBinary = parseInt(month).toString(2)
    const dayBinary = parseInt(day).toString(2)
    return `${yearBinary}-${monthBinary}-${dayBinary}`
};
console.log(convertDateToBinary('2080-02-29'));