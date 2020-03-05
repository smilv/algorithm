/**
 * bin 2020/3/5
 * 递归计算数组的和
 */

/**
 * @param {*} total 和
 * @param {*} array 当前数组
 */
function sum(total, array) {
    //临界条件
    if (array.length == 0) {
        return total;
    }
    //递归体
    return sum(total + array[0], array.slice(1));
}

console.log(sum(0, [1, 2, 3, 4, 5]));
