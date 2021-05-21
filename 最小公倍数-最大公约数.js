/*
 * @Description: 最小公倍数、最大公约数
 * @Autor: bin
 * @Date: 2021-05-21 21:35:07
 * @LastEditors: bin
 * @LastEditTime: 2021-05-21 23:21:33
 */

/*求最大公约数方法：辗转相除法
始终用较大数除以较小数，然后用余数代替较大数
最终结果余数为0时，整数就是最大公约数
举例：225 125求最大公约数
225 125(225除以125余数100)
125 100(125除以100余数25)
100 25 (100除以25余数0)
所以最大公约数为25
*/

/*求最小公倍数方法：最小公倍数等于两数之积除以最大公约数
225 125求最小公倍
225*125/25 = 1125
所以最小公倍结果：1125
*/

let a = 12,
    b = 8;

function big(a, b) {
    let max = Math.max(a, b),
        min = Math.min(a, b),
        res;
    if (max % min == 0) {
        res = min;
    } else {
        small(max % min, min);
    }
    console.log(res);
    return res;
}
big(a, b);

function big2(a, b) {
    let max = Math.max(a, b),
        min = Math.min(a, b),
        res,
        i;
    while (i != 0) {
        i = max % min;
        max = min;
        min = i;
    }
    console.log(max);
    return max;
}
big2(a, b);

function small(a, b) {
    let res = (a * b) / big(a, b);
    console.log(res);
}
small(a, b);

/* function small() {
    let res,
        i = 1;
    while (i > 0) {
        if (i % a == 0 && i % b == 0) {
            res = i;
            i = 0;
        } else {
            i++;
        }
    }
    console.log(res);
}
small();

function big() {
    let res,
        i = Math.max(a, b);
    while (i > 0) {
        if (a % i == 0 && b % i == 0) {
            res = i;
            i = 0;
        } else {
            i--;
        }
    }
    console.log(res);
}
big(); */
