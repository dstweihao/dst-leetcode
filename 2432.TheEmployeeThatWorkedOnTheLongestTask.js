/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */

let n = 10, logs = [[0,3],[2,5],[0,9],[1,15]]
const hardestWorker = function (n, logs) {
    let longestDuration = logs[0][1];
    let employeeDurationDifferences = [[logs[0][0], logs[0][1]]];

    logs.forEach((log, index) => {
        if (index >= logs.length - 1) {
            return;
        }
        const currentTimeDiff = logs[index + 1][1] - logs[index][1];
        employeeDurationDifferences.push([logs[index + 1][0], currentTimeDiff]);
        longestDuration = Math.max(longestDuration, currentTimeDiff);
    });

    const longestDurationEmployees = employeeDurationDifferences.filter(diff => diff[1] === longestDuration);

    // 如果只存在一个员工是这个任务时长，则直接返回该员工的ID
    if (longestDurationEmployees.length == 1) {
        return longestDurationEmployees[0][0]
    }

    let longestDurationEmployeeIds = [];
    longestDurationEmployees.forEach(record => {
        longestDurationEmployeeIds.push(record[0]);
    });
    return Math.min(...longestDurationEmployeeIds);
}
hardestWorker(n, logs)
console.log("🚀 ~ hardestWorker(n, logs):", hardestWorker(n, logs))
