const fs = require("fs");
const http = require('http');

// 创建HTTP服务器
const server = http.createServer((req, res) => {
  // 设置响应头
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.writeHead(200, {
    // 'Content-Type': 'text/plain'
    // 'Content-Type': 'text/html'
    'Content-Type': 'text/json'
  });

  // 返回响应内容
  // res.end('Hello from web server');

  // var readStream = fs.createReadStream(__dirname + "/09_readMe.html", "utf8");
  // readStream.pipe(res);

  var obj = {
    name: "tom",
    age: 18
  }

  res.end(JSON.stringify(obj));


});

// 监听端口3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`服务器正在端口 ${PORT} 上运行`);
});
