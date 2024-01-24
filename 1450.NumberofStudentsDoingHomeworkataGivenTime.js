/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */

var startTime = [4]
var endTime = [4]
var queryTime = 4

var busyStudent = function (startTime, endTime, queryTime) {
    let doHomeworkCount = 0
    for (let i = 0; i < startTime.length; i++) {
        if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
            doHomeworkCount += 1
        }

    }
    return doHomeworkCount
}
    
busyStudent(startTime, endTime, queryTime)