/*
 * @Description: 冒泡排序
 * @Author: zhaobin
 * @Date: 2023-11-21 15:46:51
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-11-22 15:32:23
 */

const arr = [5, 4, 3, 2, 1];

/*
https://blog.csdn.net/z914020826/article/details/132910829
复杂度 O(n^2)
4,3,2,1,5  第1次后，确认5的位置
3,2,1,4,5  第2次后，确认4的位置
2,1,3,4,5  第3次后，确认3的位置
1,2,3,4,5  第4次后，确认2的位置
*/
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    //每次大循环，确认arr.length-1-i位的值，所以小循环不用再考虑arr.length-1-i后的值
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));
