const fs = require("fs");
const http = require('http');
const data = require("./10_data.json");

function startServer() {
  // 创建HTTP服务器
  const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/" || req.url === "/home") {
      // 设置响应头
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.createReadStream(__dirname + "/10_home.html", "utf8").pipe(res);
    } else if (req.url === "/user") {
      // 设置响应头
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data))
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      fs.createReadStream(__dirname + "/10_404.html", "utf8").pipe(res);
    }
  });
  
  // 监听端口3000
  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`服务器正在端口 ${PORT} 上运行`);
  });
}

module.exports = {
  startServer
}