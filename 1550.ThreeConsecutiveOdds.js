/**
 * @param {number[]} arr
 * @return {boolean}
 */

// const arr = [2, 6, 4, 1]

const arr = [1, 2, 34, 3, 4, 5, 7, 23, 12]

var threeConsecutiveOdds = function (arr) {
    // 因为相邻3个数组都是奇数，意味着它们的下标值都是连续的，比如345
    let indexs = []
    for (let i = 0; i < arr.length; i++) {
        // 如果是奇数，则把其下标添加到下标数组indexs中
        if (arr[i] % 2 !== 0) {
            indexs.push(i)
        }

    }
    // 将下标数组排序，得到从小到大的顺序
    indexs.sort()
    // 如果没有存在3个以上的奇数，直接得到结果为false
    if (indexs.length < 3) {
        return false
    }

    for (let i = 0; i < indexs.length; i++) {
        // 遍历下标数组，定义当前值、下一个值、再下一个值，如果存在连续的3个数字，则可直接得到结果，返回true
        let current = indexs[i]
        let next = indexs[i + 1]
        let last = indexs[i + 2]
        
        if (current + 1 == next && current + 2 == last) {
            return true
        }
        // 如果已经比较到下标数组倒数第三个，还是没有结果，而当i是倒数第二个时，因为只有2个值了，就没有比较的必要了，返回结果false
        const lastIndex = indexs.length - 1
        if (i > lastIndex - 2) {
            return false
        }

    }

};

// threeConsecutiveOdds(arr)

