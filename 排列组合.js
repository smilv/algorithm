let names = ["iPhone X", "iPhone XS"];
let colors = ["黑色", "白色"];
let storages = ["64g", "256g"];

/**
 * 排列结果
 * [
 *      ["iPhone X", "黑色", "64g"],
 *      ["iPhone X", "黑色", "256g"],
 *      ["iPhone X", "白色", "64g"],
 *      ["iPhone X", "白色", "256g"],
 *      ["iPhone XS", "黑色", "64g"],
 *      ["iPhone XS", "黑色", "256g"],
 *      ["iPhone XS", "白色", "64g"],
 *      ["iPhone XS", "白色", "256g"],
 * ]
 */

/**
 * 我们设计的递归函数接受两个参数：
 * index 对应当前正在处理的下标，是 names 还是 colors 或是 storage。
 * prev 上一次递归已经拼接成的结果，比如 ['iPhone X', '黑色']。
 *
 * 进入递归函数：
 *
 * 处理属性数组的下标 0：假设我们在第一次循环中选择了 iPhone XS，那此时我们有一个未完成的结果状态，假设我们叫它 prev，此时 prev = ['iPhone XS']。
 *
 * 处理属性数组的下标 1：那么就处理到 colors 数组的了，并且我们拥有 prev，在遍历 colors 的时候继续递归的去把 prev 拼接成 prev.concat(color)，
 * 也就是 ['iPhone XS', '黑色'] 这样继续把这个 prev 交给下一次递归。
 *
 * 处理属性数组的下标 2：那么就处理到 storages 数组的了，并且我们拥有了 name + color 的 prev，
 * 在遍历 storages 的时候继续递归的去把 prev 拼接成 prev.concat(storage)，也就是 ['iPhone XS', '黑色', '64g']，
 * 并且此时我们发现处理的属性数组下标已经到达了末尾，那么就放入全局的结果变量 result 中，作为一个结果。
 */

/**
 * @param  {...any} chunks 将 argumengs 转换为数组
 */
function combine(...chunks) {
    let result = [];
    let heapler = function(chunksIndex, prev) {
        let chunk = chunks[chunksIndex];
        let isLast = chunksIndex === chunks.length - 1;
        for (let key of chunk) {
            let cur = prev.concat(key);
            if (isLast) {
                result.push(cur);
            } else {
                heapler(chunksIndex + 1, cur);
            }
        }
    };
    heapler(0, []);
    console.log(result);
}

combine(names, colors, storages);
