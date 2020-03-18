/**
 * bin 2020/3/11
 * 数组去重
 */

var arr = [1, 2, 1, 2, 3, 6, 3, 8];

/**
 * for循环逐个删除重复元素
 * @param {*} arr
 */
// function unique(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var k = i + 1; k < arr.length; k++) {
//             if (arr[i] == arr[k]) {
//                 arr.splice(k, 1);
//                 k--;
//             }
//         }
//     }
// }

/**
 * 利用indexOf查找新数据是否包含，如果没有就添加到新数组
 * @param {*} arr
 */
function unique(arr) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

unique(arr);

/**
 * 利用 new Set得到一个不重复的Set对象
 * Array.from得到一个新的，浅拷贝的数组实例
 */
var newArr = Array.from(new Set(arr));

// console.log(newArr);
