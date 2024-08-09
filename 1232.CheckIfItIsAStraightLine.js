/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];

const checkStraightLine = function (coordinates) {
  // 两点确定一条直线
  if (coordinates.length < 2) {
    return false;
  }
  // 同一个X轴
  const allEqualX = coordinates.every((item) => item[0] === coordinates[0][0]);
  if (allEqualX) {
    return true;
  }
  // 同一个Y轴
  const allEqualY = coordinates.every((item) => item[1] === coordinates[0][1]);
  if (allEqualY) {
    return true;
  }
  // 对角线
  const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];
  // 遍历剩余的坐标点，检查斜率是否一致
  for (let i = 2; i < coordinates.length; i++) {
    const [xi, yi] = coordinates[i];
    // 避免除以零，并且使用交叉乘积来比较斜率
    if ((yi - y0) * (x1 - x0) !== (y1 - y0) * (xi - x0)) {
      return false;
    }
  }
  return true;
};

