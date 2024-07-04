var fs = require("fs");

// var readMe = fs.readFileSync("./07_readMe.txt", "utf-8");

// console.log(readMe);

// fs.writeFileSync("07_writeMe.txt", readMe);

// var readMe = fs.readFile("./07_readMe.txt", "utf-8", function (err, data) {
var readMe = fs.readFile("./07_readMe.txt", "utf-8", (err, data) => {
  // console.log(data);
  // fs.writeFile("07_writeMe.txt", data, function (err) {
  fs.writeFile("07_writeMe.txt", data, err => {
    // err 写入失败：错误对象，写入成功：null
    if (err) {
      console.log("Write File Failed:" + err);
      return;
    }
    console.log("Read & write File Succeed");
  });
})

// 等待四秒
// var waitTill = new Date(new Date().getTime() + 4 * 1000);
// while (waitTill > new Date()) {}

console.log("Finished");