/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 
 * 输入：
输出：1
 */
let nums = [-1, -2, -3, -4, 0, 2, 1]
let result = 1
let arraySign = function (nums) {
    let product = 1
    nums.forEach(n => {
        if (n === 0) {
            product = 0
            return
        }
        product = product * n

    });
    return signFunc(product)

    function signFunc(p) {
        if (p > 0) {
            return 1
        } else if (p < 0) {
            return -1
        } else {
            return 0
        }
    }
}
console.log(arraySign(nums))