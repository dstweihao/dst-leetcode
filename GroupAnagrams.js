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
    })
    st.forEach((stw, i) => {
       
        st.forEach((ste, j) => {
            
            if (i !== j && stw == ste) {
                console.log(i)
            }
        })
    })


};
var points = [40, 100, 1, 5, 25, 10];

points.sort(function (a, b) { return b - a });
groupAnagrams(strs)
