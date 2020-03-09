/**
 * bin 2020/3/9
 *
 * 实现一个add方法，使计算结果能够满足如下预期：
 * add(1)(2)(3) = 6;
 * add(1, 2, 3)(4) = 10;
 * add(1)(2)(3)(4)(5) = 15;
 */

function add() {
    //初始化时，将参数保存为数组；arguments为类数组对象，并不是一个 Array
    let args = [...arguments];
    //收集所有的参数，存入args数组
    let addArgs = function() {
        args.push(...arguments);
        return addArgs;
    };
    //利用toString隐式转换的特性，在调用add方法时，最后进行计算求和
    addArgs.toString = function() {
        return args.reduce((total, num) => total + num);
    };
    return addArgs;
}

add(1, 2)(3);
add(1)(2)(3); // 6
add(1, 2, 3)(4); // 10
add(1)(2)(3)(4)(5); // 15
add(2, 6)(1); // 9
