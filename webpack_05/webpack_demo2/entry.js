import "./style.scss";
// 导入 node_ require
import test from "./test.js";
import $ from "jquery";
window.$=$;
window.jQuery=$;


document.getElementById("app").innerText="hello world"+test;