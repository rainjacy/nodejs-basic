const http = require('http');

// 创建HTTP服务器
const server = http.createServer((req, res) => {
  // 设置响应头
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  var obj = {
    name: "tom",
    age: 18,
    sex: "M",
    demo: "hi"
  }

  res.end(JSON.stringify(obj));
});

// 监听端口3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`服务器正在端口 ${PORT} 上运行`);
});
