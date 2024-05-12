


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const list1 = [1, 2, 4]
const list2 = [1, 3, 4]
const out = [1, 1, 2, 3, 4, 4]
var mergeTwoLists = function (list1, list2) {
    
    return list1.concat(list2).sort()
};

console.log(mergeTwoLists(list1, list2))