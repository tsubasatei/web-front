//node平台支持JS全部核心语法
var a = 100;
var b = 200;
console.log(a + b); // 300
//运算符[数学运算符、比较运算符、逻辑运算符]都支持
console.log(3 > 8 ? 6 : 9); //9
//流程控制语句
for (var i = 1; i <= 100; i++) {
  if (i % 2 == 0) console.log(i); // 2,4,6...100
}
//函数
function sum(a, b) {
  return a + b;
}
console.log(sum(11, 11)); // 22
//数组
var arr = ["吃饭", "睡觉", "打豆豆"]; 
console.log(arr.reverse());// [ '打豆豆', '睡觉', '吃饭' ]
//构造函数
function People(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
//原型对象方法
People.prototype.eat = function() {
  console.log(this.name + "可以吃八斤米饭");
};
//创建小明
var xiaoming = new People("小明", 18, "男");
xiaoming.eat(); // 小明可以吃八斤米饭

//没有DOM、BOM
// console.log(window); // window is not defined
// console.log(document); // document is not defined

// ==================2========================================
//node软件给我们提供模块（给JS赋予超能力），node软件本省就有的
//fs：可以通过JS向某一个文件写入数据
var fs = require("fs");
//queryString模块：可以将JSON数据格式转换为queryString字符串
var querystring = require("querystring");
//写入数据
fs.writeFile("./test.txt", "老师是祖国的老花骨朵吧", function () {
    console.log("数据写入......")
});
//读取数据
fs.readFile("./test.txt", function (err, data) {
    console.log(data.toString());
});

//将JSON转换为queryString字符串
console.log(querystring.stringify({
    "a": 1,
    "b": 2
})); // a=1&b=2

// ===============3======================
//不是重点
var http = require("http");
//创建服务器对象
var app = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    //服务器端下发状态码 304有问题
    res.statusCode = 500;
    //服务器响应数据
    res.end("自己开发的服务器");
});
//端口号设置
app.listen(3000); // http://localhost:3000/

// =================4=====================
//引入社区自定义模块colors
//可以改变文字颜色
var colors = require("colors");
console.log("我非常喜欢Java".green);
console.log("我很喜欢睡觉".rainbow);

//引入社区自定义模块solarLunar
var solarLunar = require("solarLunar");
var solar2lunarData = solarLunar.solar2lunar(1996, 3, 8);
console.log(solar2lunarData);
console.log(solar2lunarData.animal); // 鼠