/*
 * @Description: 快速排序
 * @Author: zhaobin
 * @Date: 2023-11-16 14:34:39
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-11-24 14:05:08
 */

/*
https://blog.csdn.net/qq_31968791/article/details/124274755
时间复杂度:O(nlogn)
先找到一个基准点（一般指数组的中部），然后数组被该基准点分为两部分，依次与该基准点数据比较，如果比它小，放左边；反之，放右边
左右分别用一个空数组去存储比较后的数据
最后递归执行上述操作，直到数组长度 <= 1
*/

// const arr = [8, 64, 25, 112, 4582, 4, 2, 685, 4, 0, 326, 4, 85, 3, 78];
const arr = [3, 4, 1, 2];

/**
 * 通过冒泡排序衍生
 * @param {*} arr 待排序数组
 * @param {*} start 开始索引
 * @param {*} end 结束索引
 */
function quickSort(arr, start = 0, end = arr.length - 1) {
  //待排序数组剩一项时，跳出递归
  if (start >= end) {
    return;
  }
  let base = arr[start]; // 选取数组第一项为基数
  let left = start; // 左边指针位置指向第一项
  let right = end; // 右边指针位置指向最后一项
  //一趟排序，以基数为分割线，左边 < 基数 < 右边
  while (left < right) {
    //从右往左，如果没有找到比基数小的，右边指针递减
    while (right > left && arr[right] >= base) right--;
    //找到比基数小的，互换位置
    if (right > left) {
      let temp = arr[right];
      arr[right] = arr[left];
      arr[left] = temp;
    }
    //从左往右，如果没有找到比基数大的，左边指针递增
    while (left < right && arr[left] <= base) left++;
    //找到比基数小的，互换位置
    if (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }
  //到这里，基数左边的都小于基数，右边的都大于
  //对左右待排序数组进行递归,直到待排序数组剩一项
  quickSort(arr, start, right - 1);
  quickSort(arr, right + 1, end);
  return arr;
}

/**
 * 通过两个数组存放处理，进行合并
 */
function quickSort2(arr) {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const pivot = arr.splice(middle, 1);
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot[0]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort2(left).concat(pivot, quickSort2(right));
}

/*
0-3
3, 4, 1, 2 i=0 p=0 => 3, 4, 1, 2
3, 4, 1, 2 i=1 p=0 => 3, 4, 1, 2
3, 4, 1, 2 i=2 p=0 => 1, 4, 3, 2
1, 3, 4, 2 p=1 => 1, 2, 3, 4

0-0 return

2-3
1, 2, 3, 4 i=2 p=2 => 1, 2, 3, 4
1, 2, 3, 4 p=3 => 1, 2, 3, 4

2-2 return
4-3 return
*/
function partition(array, left, right) {
  let pivotIndex = left;
  let pivot = array[right];
  for (let i = left; i < right; i++) {
    if (array[i] < pivot) {
      [array[pivotIndex], array[i]] = [array[i], array[pivotIndex]];
      pivotIndex++;
    }
  }
  [array[pivotIndex], array[right]] = [array[right], array[pivotIndex]];
  return pivotIndex;
}
function quickSort3(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = partition(array, left, right);
    quickSort3(array, left, pivotIndex - 1);
    quickSort3(array, pivotIndex + 1, right);
  }
  return array;
}

// console.log(quickSort(arr));
// console.log(quickSort2(arr));
console.log(quickSort3(arr));