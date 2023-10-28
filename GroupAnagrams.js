/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 */


let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
let outs = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

var groupAnagrams = function (strs) {
    strs.forEach(str => {
        console.log(str)
    });
};

groupAnagrams(strs)
