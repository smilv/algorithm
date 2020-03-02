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
    let endTiem = Date.parse(end) + 60 * 60 * 24 * 1000;
    let diffDay = (endTiem - startTime) / 60 / 60 / 24 / 1000;
    let result = 0;
    for (let i = 0; i < diffDay; i++) {
        let day = new Date(startTime).getDay();
        if (day == 6 || day == 0) {
            result++;
        }
        startTime += 60 * 60 * 24 * 1000;
    }
    return result;
}

day("2020-3-2", "2020-3-18");
