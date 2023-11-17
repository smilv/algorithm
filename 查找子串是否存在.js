/*
 * @Description: 查找子串是否存在
 * @Author: zhaobin
 * @Date: 2023-11-17 14:03:37
 * @LastEditors: zhaobin
 * @LastEditTime: 2023-11-17 15:06:18
 */

/*
朴素搜索
O(n^2)
 */
function naiveSearch(str, subStr) {
  for (let i = 0; i <= str.length - subStr.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      if (str[i + j] !== subStr[j]) break;
      if (j === subStr.length - 1) return true;
    }
  }
  return false;
}
naiveSearch("abcdefg", "cde");
