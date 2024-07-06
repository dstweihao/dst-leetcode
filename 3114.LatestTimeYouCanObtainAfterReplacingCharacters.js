/**
 * @param {string} s
 * @return {string}
 */
const s1 = "1?:?4";
const s = "?3:12";
// "?3:12"
// "0?:5?"
// 最早的时间为 00:00，最晚的时间为 11:59。
// "0?:5?"
const findLatestTime = function (timeString) {
  let result = "";
  let replacementDigits = ["1", "9", "0", "5", "9"];
  for (let i = 0; i < timeString.length; i++) {
    let char = timeString[i];
    if (char === "?") {
      char = replacementDigits[i];
    }
    result += char;
  }
  let sub = result.substring(0, 2);
  let replacementString = "";
  if (timeString[0] === "?" && Number(sub) > 11) {
    replacementString = "0" + timeString[1];
  }
  if (timeString[1] === "?" && Number(sub) > 11) {
    replacementString = "11";
  }
  if (replacementString) {
    result = result.replace(sub, replacementString);
  }
  return result;
};
