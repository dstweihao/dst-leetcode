/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */



/**
 * 在 JavaScript 中实现这个问题可以通过以下步骤：
 * 
1、创建一个函数来计算每对朋友之间的亲近程度。
2、遍历每对配对的朋友，检查是否存在不开心的朋友。
3、对于每对配对的朋友 (x, y)，检查是否存在其他配对 (u, v)，满足上述两个条件，如果是，则将 x 加入到不开心朋友的列表中。
4、返回不开心朋友列表的长度作为不开心的朋友数目。

以下是 JavaScript 实现的代码：

1、外层循环遍历每一个朋友，i 表示当前的朋友。
2、内层循环遍历当前朋友的朋友列表 preferences[i]，j 表示当前遍历到的朋友在朋友列表中的索引。
3、preferences[i][j] 表示当前朋友列表中索引为 j 的朋友。
4、closeness[i][preferences[i][j]] = j; 这行代码的作用是将朋友 i 对朋友 preferences[i][j] 的亲近程度值设为 j。这里的 j 表示朋友在当前朋友列表中的位置，位置越靠前，亲近程度越高。

这段代码是用来检查每对朋友之间的亲密度是否符合他们的配对偏好，并计算不开心的朋友数量的。让我来逐步解释：

1、外层 for...of 循环遍历了传入的 pairs 数组，其中每个元素都表示一对配对的朋友 [x, y]。
2、在内层循环 for (const u of preferences[x]) 中，遍历了朋友 x 的偏好列表 preferences[x]，即朋友 x 喜欢的其他朋友的顺序。
3、在每次迭代中，首先检查当前遍历到的朋友 u 是否已经被检查过，即是否等于朋友 y。如果是，则跳过该朋友的检查，因为他已经被配对过了。
4、接着，通过 const v = pairMap.get(u); 获取朋友 u 的配对伙伴 v。
5、然后，通过条件判断 if (closeness[u][x] < closeness[u][v] && closeness[x][u] < closeness[x][y]) 来检查朋友 x 和朋友 u 之间的亲密度是否符合他们的偏好。这里使用了 closeness 数组来表示朋友之间的亲密度，closeness[u][v] 表示朋友 u 和朋友 v 之间的亲密度。

如果条件成立，说明朋友 x 和朋友 u 之间的亲密度不符合他们的偏好，那么将不开心的朋友数量 unhappyCount 自增，并且通过 break 跳出内层循环，继续下一个配对的检查。
通过这段代码，可以检查每对朋友之间的亲密度是否符合他们的配对偏好，并统计不开心的朋友数量。
 */

const n = 4
const preferences = [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]]
const pairs = [[0, 1], [2, 3]]

var unhappyFriends = function (n, preferences, pairs) {
    let unhappyCount = 0;
    const pairMap = new Map();

    // 建立配对映射
    for (const [x, y] of pairs) {
        pairMap.set(x, y);
        pairMap.set(y, x);
    }

    // 检查每对配对
    for (const [x, y] of pairs) {
        const u = pairMap.get(x);
        const v = pairMap.get(u);

        // 检查亲近程度是否满足条件
        if (preferences[x].indexOf(u) < preferences[x].indexOf(y) &&
            preferences[u].indexOf(x) < preferences[u].indexOf(v)) {
            unhappyCount++;
        }

        const u2 = pairMap.get(y);
        const v2 = pairMap.get(u2);

        // 检查另一方向的配对
        if (preferences[y].indexOf(u2) < preferences[y].indexOf(x) &&
            preferences[u2].indexOf(y) < preferences[u2].indexOf(v2)) {
            unhappyCount++;
        }
    }

    return unhappyCount;
};

console.log(unhappyFriends(n, preferences, pairs))