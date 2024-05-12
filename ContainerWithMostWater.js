/**
 * @param {number[]} height
 * @return {number}
 */

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
let maxA = 49
/**
 * 
定义两个指针left和right，分别指向容器的左边界和右边界。
定义一个变量area用于存储最大面积的结果，初始值为0。
使用一个循环，当left小于right时进行迭代：
计算当前的面积，即min(height[left], height[right]) * (right - left)。Math.min()返回传入参数中最小值，.max()则为最大值。
如果当前面积大于area，则更新area的值。
如果height[left]小于height[right]，则将left右移一位；否则将right左移一位。
循环结束后，返回area作为最大面积的结果。
 */

/**
 * 

首先需要明确的是，这段代码是在处理一个整数数组 height，数组中的每个元素表示高度，数组的下标表示位置。这个算法的目的是找到两个位置，使得它们之间的容器装水量最大。
这里的双指针法，就是使用两个指针 left 和 right，分别指向数组的开始和结尾。每次循环时，计算当前 left 和 right 之间的容器容量，然后将容量与当前最大容量比较，更新最大容量。
接着，如果 height[left] < height[right]，则将 left 指针向右移动一位，否则将 right 指针向左移动一位。
这个过程的主要思想是，如果 height[left] < height[right]，则左侧的高度小于右侧的高度，因此将左指针向右移动，可以保证容器的高度最大化，同时容器的宽度减小，因此容器的容量可能会增加。
反之，如果 height[left] >= height[right]，则右侧的高度小于或等于左侧的高度，因此将右指针向左移动可以保证容器的高度最大化，同时容器的宽度减小，因此容器的容量可能会增加。
这个算法的时间复杂度是 O(n)，其中 n 是数组的长度，因为 left 和 right 指针每次都会向中间移动，所以最多只需要遍历一遍数组。
 */

/**
 * 这个问题涉及到容器的容量的计算方式，容量的计算方法是容器的高度乘以容器的宽度。在这个算法中，每次移动左指针或右指针，都会导致容器的宽度减少，但是容器的高度
 * 可能会增加，因此容器的容量可能会增加。举个例子，假设当前左指针指向的位置高度为 2，右指针指向的位置高度为 3，容器的宽度为 5，则容器的容量为 2 x 5 = 10。如果将左
 * 指针向右移动一位，容器的宽度变为 4，但是当前左指针指向的位置高度为 3，因此容器的容量变为 3 x 4 = 12，容量增加了。这个算法的核心思想是，每次移动指针时，都要保证容器
 * 的高度最大化，因此容器的容量才有可能增加。 
 * */


const maxArea = function (height) {

    let left = 0;
    let right = height.length - 1;
    let area = 0;

    while (left < right) {
       let currentArea = Math.min(height[left], height[right]) * (right - left);
       area = Math.max(area, currentArea);

       if (height[left] < height[right]) {
          left++;
       } else {
          right--;
       }
    }
    return area;
};

maxArea(height)