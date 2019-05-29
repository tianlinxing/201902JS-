let str = '你好';
// exports.mystr = str;
// exports.mystr1 = 1;
// exports.mystr2 = 2;
// exports.mystr3 = 3;
// exports = {}// 错
module.exports.qqq = 123;
module.exports = {
    // 可以整个覆盖
    q:12,
    w:143
}