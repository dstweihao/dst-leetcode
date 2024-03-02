/**
 * @param {number[]} arr
 * @return {boolean}
 */

const arr = [1, 2, 1, 1]

// const arr = [1, 2, 34, 3, 4, 5, 7, 23, 12]

var threeConsecutiveOdds = function (arr) {

    // 如果数组长度小于3，则直接返回false
    if (arr.length < 3) {
        return false
    }

    let lastIndex = arr.length - 1

    for (let i = 0; i < arr.length; i++) {
        // 定义当前值、下一个值、再下一个值，如果存在连续的三个奇数，则可直接得到结果，返回true
        let current = arr[i]
        let next = arr[i + 1]
        let last = arr[i + 2]

        // 如果已经比较至数组倒数第三个，还是没有结果，而当i是倒数第二个时，因为只有2个值了，就没有比较的必要了，返回结果false
        if (i > lastIndex - 2) {
            return false
        }

        if (current % 2 !== 0 && next % 2 !== 0 && last % 2 !== 0) {
            return true
        }
    }
}

// threeConsecutiveOdds(arr)


