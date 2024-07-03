/**
 * @param {string} s
 * @return {string}
 */
const s1 = "1?:?4"
const s = "?3:12"
// "?3:12"
// "0?:5?"
// 最早的时间为 00:00，最晚的时间为 11:59。
// "0?:5?"
const findLatestTime = function (s) {
    let result = ''
    const arry = ['1', '1', '0', '5', '9']
    // console.log('element :', element);
    // if (element === '?') {
    //     element = arry[i]
    // }
    // if (s[0] === '0' && s[1] === '?' && i === 1) {
    //     element = '9'
    // }
    // if (s[0] === '1' && s[1] === '?' && i === 1) {
    //     element = '1'
    // }
    console.log('s[0] :', s[0]);
    if (s[0] === '?' && s[1] <= '1') {
        s = s.replace("?", "1");
        console.log('s[0] :', s[0]);
    }
    if (s[0] === '?' && s[1] > '1') {
        s = s.replace("?", "0");
    }
    if (s[3] === '?') {

        s = s.replace("?", "5");
    }
    if (s[4] === '?') {
        s = s.replace("?", "9");
    }

    return s




};
console.log('findLatestTime :', findLatestTime(s));
