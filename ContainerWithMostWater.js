
/**
 * @param {number[]} height
 * @return {number}
 */

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
let output = 49

var maxArea = function (height) {
    let maxArea =0

    for (let i = 0; i < height.length; i++) {
        for (let j = 0; j < height.length - 1 - i; j++) {
            console.log('---',  height[i] + '===' + height[j + 1])

            let l = j + 1 - i
            let h = height[i] < height[j + 1] ? height[i] : height[j]

            let value = l * h

            // console.log('maxArea :', maxArea);

        }
    }
};

maxArea(height)