/**
 * @param {number[]} prices
 * @return {number[]}
 */
// 输入：prices = [8,4,6,2,3]
// 输出：[4,2,4,2,3]
//  j > i 且 prices[j] <= prices[i] 的 最小下标
const prices = [8, 4, 6, 2, 3]
const finalPrices = function (prices) {
    let priceDifferences = []
    prices.forEach((currentPrice, currentIndex) => {
        let lowerPriceIndexes = []
        let priceDifference = 0
        prices.forEach((comparePrice, compareIndex) => {
            if (compareIndex > currentIndex && comparePrice <= currentPrice) {
                lowerPriceIndexes.push(compareIndex);
            }
        })
        if (lowerPriceIndexes.length === 0) {
            priceDifference = currentPrice
        } else {
            let minIndex = Math.min(...lowerPriceIndexes)
            priceDifference = currentPrice - prices[minIndex]
        }
        priceDifferences.push(priceDifference)
    })
    return priceDifferences
}
console.log(finalPrices(prices))