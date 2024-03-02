/**
 * @param {string[]} strs
 * @return {string[][]}
 */

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]


var groupAnagrams = function (strs) {
    let sortedStrs = []
    strs.forEach(str => {
        // 首先使用 split("") 将字符串分割为字符数组，然后使用 sort() 对字符数组进行排序，最后使用 join("") 将排序后的字符数组拼接为字符串。
        let sortedStr = str.split("").sort().join("");
        sortedStrs.push(sortedStr)
    })
    console.log('sortedStrs: ', sortedStrs);
    let categories = {}
    sortedStrs.forEach((str, index) => {
 
        // 如果sortedStrs中有相同的元素，则加入到categories[str]数组中，但是因为sortedStrs是排序后的数据，虽然元素被排序了，但是下标index是不变的，所以就push原数组strs相同下标的元素。
        if (categories[str]) {
            categories[str].push(strs[index])
        } else {
            categories[str] = [strs[index]]
        }
    })
    console.log('categories: ', categories);
    let result = []

    for (const key in categories) {
        result.push(categories[key])
    }
    console.log('result: ', result);
    return result
   
}

groupAnagrams(strs)

return




let outs = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

var groupAnagrams2 = function (strs) {
    let st = []
    // 将每个字符串按字符分解成新增的字符串数组  [ 'e', 'a', 't' ]
    strs.forEach(str => {
        st.push([...str])

    });

    // 将每个字符串数组里的字符串排序  [ 'a', 'e', 't' ]
    st.forEach(sti => {


        sti.sort();
    })

    // 将数组中相同元素进行分类，使用JSON.stringify()将字符串数组变成字符串进行比较，如果一致，则记下下标。
    st.forEach((stw, i) => {
    })

    for (i = 0; i < st.length - 1; i++) /* 外循环为排序趟数，len个数进行len-1趟 */
        for (j = 0; j < st.length - 1 - i; j++) { /* 内循环为每趟比较的次数，第i趟比较len-1-i次 */
            // 

            if (JSON.stringify(st[i]) == JSON.stringify(st[j + 1])) {
                // 
            }
        }
    /**
     * 要将字符串数组中相同元素进行分类，可以使用哈希表（或字典）来实现。具体步骤如下：

创建一个空的哈希表（或字典）。

遍历字符串数组，对于每个字符串，判断它是否已经出现在哈希表中。

如果字符串已经在哈希表中，则将该字符串添加到对应的分类列表中。

如果字符串不在哈希表中，则创建一个新的分类列表，并将该字符串添加到列表中。

最后，哈希表中的每个键值对都代表一个分类，可以将结果存储在一个二维数组中，其中每个子数组表示一个分类。
     *  
     * 
     */
    function classifyStrings(strings) {
        let categories = {};
        /**
         * 
         *   apple: [ 'apple', 'apple' ],
             banana: [ 'banana', 'banana' ],
             orange: [ 'orange' ]
         */
        for (let i = 0; i < strings.length; i++) {
            let string = strings[i];
            if (categories[string]) {
                categories[string].push(string);
            } else {
                categories[string] = [string];
            }
        }

        let result = [];
        for (let category in categories) {
            result.push(categories[category]);
        }

        return result;
    }

    // 示例用法
    let strings = ["apple", "banana", "apple", "orange", "banana"];
    let result = classifyStrings(strings);


};
groupAnagrams(strs)
