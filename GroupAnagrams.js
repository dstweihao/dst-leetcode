/**
 * @param {string[]} strs
 * @return {string[][]}
 */

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

let outs = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

var groupAnagrams = function (strs) {
    let st = []
    strs.forEach(str => {
        st.push([...str])


    });
    // points.sort(function(a,b){returna-b});
    st.forEach(sti => {


        sti.sort();
        console.log("🚀 ~ file: GroupAnagrams.js:19 ~ groupAnagrams ~ sti:", sti)
    })
    st.forEach((stw, i) => {
       
        st.forEach((ste, j) => {
            console.log("🚀 ~ file: GroupAnagrams.js:25 ~ st.forEach ~ stw:", stw)
            console.log("🚀 ~ file: GroupAnagrams.js:26 ~ st.forEach ~ ste:", ste)
            
            if (i !== j && stw == ste) {
                console.log(i)
            }
        })
    })


};
var points = [40, 100, 1, 5, 25, 10];

points.sort(function (a, b) { return b - a });
console.log("🚀 ~ file: GroupAnagrams.js:35 ~ points:", points)

groupAnagrams(strs)
