/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */

let n = 10, logs = [[0, 3], [2, 5], [0, 9], [1, 15]]
let hardestWorker = function (_n, logs) {
    let longTime = logs[0][1]
    let difference = [[logs[0][0], logs[0][1]]]
    logs.forEach((_log, i) => {
        if (i >= logs.length - 1) {
            return
        }
        difference.push([logs[i + 1][0], logs[i + 1][1] - logs[i][1]])
        longTime = Math.max(longTime, logs[i + 1][1] - logs[i][1])
    });
    const fill = difference.filter(diff => {
        return diff[1] == 6
    })
    let fiu = []
    fill.forEach(ite=>{
        fiu.push(ite[0])
    })
    return Math.min(...fiu)
};
hardestWorker(n, logs)