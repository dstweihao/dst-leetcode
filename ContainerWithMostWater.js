/**
 * @param {number[]} height
 * @return {number}
 */

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
let maxA = 49

var maxArea = function (height) {
    let area =0
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let left = height[i]
            let right = height[j]
            let l = j - i
            let h = left < right ? left : right
            // console.log('left: ', left, '====', 'right: ', right);
            if (l * h > area) {
                area = l * h
            }
        }
    }
    console.log('area: ', area);

    return area
};

maxArea(height)