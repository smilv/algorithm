/*
 * @Description: 归并排序
 * @Author: zhaobin
 * @Date: 2023-11-22 09:16:42
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-11-22 17:17:53
 */

/*
https://zhuanlan.zhihu.com/p/271686548
1.递归将数组均分为左右两个数组（长度为1） “分治法”中的“分割”
2.调用merge排序左右两个数组，返回结果   “分治法”中的“集成”
时间复杂度:O(nlogn)
*/
const arr = [6, 3, 5, 2];
/*
执行顺序
left = mergeSort([6,3]) => merge([6],[3]) => [3,6]
right = mergeSort([5,2]) => merge([5],[2]) => [2,5]
merge([3,6],[2,5]) => [2,5,3,6]
*/

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  return result.concat(left, right);
}

console.log(mergeSort(arr));
