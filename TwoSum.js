/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


let nums = [2, 7, 11, 15], target = 9

var twoSum = function (nums, target) {
    let output = []
    nums.forEach((item, i) => {
        nums.forEach((data, j) => {
            if (i !== j) {
                if (item + data === target) {
                    output.push(i)
                    output.push(j)
                }
            }
        })
    })
    output = Array.from(new Set(output))
    return output

};

twoSum(nums, target)
