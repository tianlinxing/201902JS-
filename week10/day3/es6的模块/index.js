// import qqq from './a.js' //从 a 文件中 引入 str 
// console.log(qqq);
import * as qqq from './a.js' // 把 a.js的所有导出 作为变量qqq; 也就是 我们可以通过 qqq去使用所有的导出
console.log(qqq.d())