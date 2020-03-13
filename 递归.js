/**
 * bin 2020/3/5
 */

/**
 * 单分支层层递归
 * 递归计算数组的和
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

// console.log(sum(0, [1, 2, 3, 4, 5]));

/**
 * 多分支并列递归
 * 走台阶，每次可以跨一个台阶或者两个台阶，请问走n个台阶有多少种走法
 * n=1  => 1
 * n=2  => 2
 * n=3  => 3
 * n=4  => 5
 * n=5  => 8
 * 实际上是一个斐波那契数列，当前项 n= n-1 + n-2
 * @param {*} n 多少个台阶
 */
function steps(n) {
    //临界条件从后两个台阶开始算
    if (n == 1) return 1;
    if (n == 2) return 2;
    return steps(n - 1) + steps(n - 2);
}

console.log(steps(5));
