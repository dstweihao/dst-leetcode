var arr = [3, 0, 1, 1, 9, 7], a = 7, b = 2, c = 3

var countGoodTriplets = function (arr, a, b, c) {
    let resultCount = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (0 <= i < j < k < arr.length && Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                    ++resultCount
                }
            }
        }
    }
    return resultCount
}
console.log(countGoodTriplets(arr, a, b, c))