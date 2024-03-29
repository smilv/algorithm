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
function binarySearch(arr, n) {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;
  let middleIndex = Math.floor((lastIndex + firstIndex) / 2);
  while (arr[middleIndex] !== n && firstIndex <= lastIndex) {
    if (arr[middleIndex] < n) {
      firstIndex = middleIndex + 1;
    } else {
      lastIndex = middleIndex - 1;
    }
    middleIndex = Math.floor((lastIndex + firstIndex) / 2);
  }
  return arr[middleIndex] === n ? middleIndex : -1;
}

binarySearch(arr, 5);
