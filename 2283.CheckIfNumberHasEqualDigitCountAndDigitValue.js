/**
 * @param {string} num
 * @return {boolean}
 */
// 如果对于 **每个** `0 <= i < n` 的下标 `i` ，
// 都满足数位 `i` 在 `num` 中出现了 `num[i]`次，那么请你返回 `true` ，否则返回 `false` 。
// 输入：num = "1210"
// 输出：true
const num = "1210"
const digitCount = function (num) {
    for (let i = 0; i < num.length; i++) {
        const n = num[i];
        console.log({ i, n });
        if (Number(n) !== getCount(i, num)) {
            return false
        }
    }
    return true

    function getCount(char, s) {
        let count = 0
        let postion = s.indexOf(char)
        while (postion !==-1) {
            count++
            postion = s.indexOf(char, postion + 1)
        }
        return count
    }
};
console.log(digitCount(num));