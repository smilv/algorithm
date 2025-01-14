/*
 * @Description: 二分
 * @Author: zhaobin
 * @Date: 2023-11-16 14:35:21
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-11-22 15:30:13
 */

/*
 https://baijiahao.baidu.com/s?id=1674250564378752576&wfr=spider&for=pc
 二分查找只对排序好的数组有效。
 每次去除一半的数据
 复杂度 O(log n)
*/

const arr = [1, 2, 3];

//查找指定元素的索引
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid; // 找到目标元素，返回索引
    } else if (arr[mid] < target) {
      left = mid + 1; // 在右半部分继续查找
    } else {
      right = mid - 1; // 在左半部分继续查找
    }
  }
  return -1; // 如果未找到目标元素，返回 -1
}

//递归写法
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // 如果未找到目标元素，返回 -1
  }

  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid; // 找到目标元素，返回索引
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right); // 在右半部分继续查找
  } else {
    return binarySearch(arr, target, left, mid - 1); // 在左半部分继续查找
  }
}

binarySearch(arr, 5);
