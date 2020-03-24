/**
 * 快速排序
 * bin 2020/3/23
 */

/**
 * @param {*} arr 待排序数组
 * @param {*} start 开始索引
 * @param {*} end 结束索引
 */
function quickSort(arr, start, end) {
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
}

// const arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 100));
// }

const arr = [2, 3, 2, 4, 5];
const start = 0;
const end = arr.length - 1;

quickSort(arr, start, end);
