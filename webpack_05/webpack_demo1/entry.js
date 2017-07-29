require("./style.scss");
// 处理jquery的加载错误
var $=require("jquery");
window.$=$;
window.jQuery=$;

//OK-------



var test=require("./test.js");
// console.log(test);
document.getElementById("app").innerText="hello webpack"+test;
