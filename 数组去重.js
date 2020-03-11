/**
 * bin 2020/3/11
 * 数组去重
 */

var arr = [1, 2, 1, 2, 3];

function unique(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var k = i + 1; k < arr.length; k++) {
            if (arr[i] == arr[k]) {
                arr.splice(k, 1);
                k--;
            }
        }
    }
}

unique(arr);
