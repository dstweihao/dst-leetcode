/**
 * @param {string} s
 * @return {character}
 */
/**
 *输入：s = "abccbaacz"
输出："c" 
*/

const repeatedCharacter = function (str) {
    let earliestRepeatIndex = Infinity;
    for (let i = 0; i < str.length; i++) {
        // 如果出现了第一次和最后一次的位置不相等，则表示有2个以上存在
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            // 第一个出现两次的字母，则关键点就在第二次出现的位置，谁最靠前（indexOf越小），那么该位置的字母就是所求的值。
            const secondOccurrenceIndex = str.indexOf(str[i], str.indexOf(str[i]) + 1);
            earliestRepeatIndex = Math.min(earliestRepeatIndex, secondOccurrenceIndex);
        }
    }
    return str[earliestRepeatIndex];
}
console.log(repeatedCharacter("abccbaacz")) // c