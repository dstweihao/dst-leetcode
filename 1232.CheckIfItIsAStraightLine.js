/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const coordinates = [
  [0, 0],
  [0, 1],
  [0, -1],
];
// [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// const coordinates = [
//   [0, 1],
//   [1, 3],
//   [-4, -7],
//   [5, 11],
// ];
// let checkStraightLine = function (coordinates) {

//     const allXEqual = coordinates.every((item) => item[0] === coordinates[0][0]
//     );
//     if (allXEqual) {
//       return true;
//     }

//     const allYEqual = coordinates.every((item) => item[1] === coordinates[0][1]
//     );
//     if (allYEqual) {
//       return true;
//     }
//   // 两点确定一条直线
//   // 斜率相同
//   const slope =(coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);

//   for (let i = 0; i < coordinates.length; i++) {
//     if (i === coordinates.length - 1) {
//       break;
//     }
//     let yDifference = coordinates[i + 1][1] - coordinates[i][1];
//     let xDifference = coordinates[i + 1][0] - coordinates[i][0];
//     if (yDifference / xDifference !== slope) {
//       return false;
//     }
//   }
//   return true;
// };
let checkStraightLine = function (coordinates) {
  // 两点确定一条直线
  if (coordinates.length !== 2) {
    return false;
  }

  const allXEqual = coordinates.every((item) => item[0] === coordinates[0][0]);
  if (allXEqual) {
    return true;
  }

  const allYEqual = coordinates.every((item) => item[1] === coordinates[0][1]);
  if (allYEqual) {
    return true;
  }

  const { x1, y1 } = coordinates[0];
  const { x2, y2 } = coordinates[1];
  const slope = (y2 - y1) / (x2 - x1);

  for (let i = 2; i < coordinates.length; i++) {
    const { x, y } = coordinates[i];
    // 斜率相同
    if ((y - y1) / (x - x1) !== (y2 - y1) / (x2 - x1)) {
      return false;
    }
    // (x - x1)*(x2 - x1)
  }

  // 两点确定一条直线

  for (let i = 0; i < coordinates.length; i++) {
    if (i === coordinates.length - 1) {
      break;
    }
    let yDifference = coordinates[i + 1][1] - coordinates[i][1];
    let xDifference = coordinates[i + 1][0] - coordinates[i][0];
    if (yDifference / xDifference !== slope) {
      return false;
    }
  }
  return true;
};
console.log(checkStraightLine(coordinates));

const { locale } = useI18n()
const $t = t[locale.value]
let popVisible = ref(false)
let visible = ref(false)
let timer: any = null
let needPolling = true
let currentCapacity = ref(0)
const pieLoading = ref<boolean>(false)
const echartRef = ref<HTMLElement | null>(null)
let myChart: echarts.ECharts | null = null
let currentCapacityStatus = ref('normal')