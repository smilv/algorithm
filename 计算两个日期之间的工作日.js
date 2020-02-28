/**bin 2020/20/28
 * 计算两个日期之间的工作日
 * 通过取得相差的毫秒数去计算天数
 * 从开始时间循环天数判断是否是周六日
 */

/**
 * @param {*} start 开始时间
 * @param {*} end   结束时间
 */
function day(start, end) {
    let startTime = Date.parse(start);
    let endTiem = Date.parse(end);
    let diffDay = (endTiem - startTime) / 60 / 60 / 24 / 1000;
    console.log(diffDay);
}

day("2020-3-2", "2020-3-4");
