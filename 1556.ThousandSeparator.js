/**
 * @param {number} n
 * @return {string}
 */
//index      0123
const str = "1.234"
//index      012 345 678
const str = "123.456.789"

const thousandSeparator = function (n) {
    const str = String(n)
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        let s = str[i];
        if ((str.length - i) % 3 == 0 && i !== str.length - 1 && i !== 0) {
            s = '.' + s
        }
        result = s + result
    }
    return result
};

