/**
 * @param {number[]} nums
 * @return {number}
 */

// var nums = [100, 4, 200, 1, 3, 2, 2]
// var nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]
var nums = [0]


var longestConsecutive = function (nums) {

    // 如果数组为空，则值为0，否则最小为1
    let sequenceMaxValue = nums.length == 0 ? 0 : 1
    
    let category = {}
    // 去重，使用对象key唯一性的特性实现数组去重。
    nums.forEach(item => {
        if (category[item]) {
            category[item].push(item)
        } else {
            category[item] = [item]
        }
    })

    let result = []
    // 获取最终的去重后的数组
    for (const key in category) {
        if (Object.hasOwnProperty.call(category, key)) {
            result.push(Number(key))

        }
    }
    // 将数组排序，从小到大排序
    result.sort((x, y) => {
        return x - y
    })

    
    // 设置顺序起点为数组下标为0的位置
    let latestStartIndex = 0
    // 设置顺序起点值，下标为0的值
    let latestStartValue = result[0]
    // 用来记录每个顺序，以起点为key，总共有多少次。
    let sequenceCountObject = {}

    result.forEach((item, index) => {
        // 因为设置了latestStartValue = result[0]，默认会走else逻辑，sequenceCountObject[0]会多一次。
        if (index > 0) {
            // 实现的逻辑是，比如数组为[1,2,3,4,5,8,9,10]，当后一个数，减去它的下标等于当前值latestStartValue(4-3=1)，意味着还是处于顺序中，如果不是，比如到8了，那就开始新的顺序起点。
            // 其中，因为第一个起点数，不是每次都是下标0开始的，所以不能只是item - latestStartIndex，而是item - (index - latestStartIndex)拿到差值。
            if (item - (index - latestStartIndex) !== latestStartValue) {
                latestStartIndex = index
                latestStartValue = result[index]
            } else {
                
                // 如果当前值减去下标差值一直等于顺序起点值，意味着还处于顺序中，就加到对象这个以每个起点下标为key的值上，+1。
                if (sequenceCountObject[latestStartIndex]) {
                    sequenceCountObject[latestStartIndex] = sequenceCountObject[latestStartIndex] + 1
                } else {
                    //当对象中还没有存在这个起点下标的key时，默认从1开始，因为当latestStartIndex开始新的起点的时候，是走上面的if逻辑的，意味着这里要把起点的次数算上，所以是1+1,第一个1是起点，第二个1是记录次数
                    sequenceCountObject[latestStartIndex] = 1 + 1
                }

            }
        }
    })
    
    // 获取多个顺序长度的最大值，如果比当前值大，则赋值最新。
    for (const key in sequenceCountObject) {
        if (Object.hasOwnProperty.call(sequenceCountObject, key)) {
            const value = sequenceCountObject[key]
            if (value > sequenceMaxValue) {
                sequenceMaxValue = value
            }

        }
    }
    
    return sequenceMaxValue

};

longestConsecutive(nums)
