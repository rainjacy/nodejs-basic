const http = require('http');
const url = require('url');
const qs = require("querystring");

function startServer(route, handle) {
  // 创建HTTP服务器
  const server = http.createServer((req, res) => {
    var pathname = url.parse(req.url).pathname;
    console.log(pathname, req.url);
    var data = [];
    req.on("error", function (error) {
      console.log(error);
    }).on("data", function (chunk) {
      data.push(chunk);
    }).on("end", function () {
      console.log(req.method);
      if (req.method === "POST") {
        // POST
        data = Buffer.concat(data).toString();
        console.log(qs.parse(data));
        route(handle, pathname, res, qs.parse(data));
      } else {
        // GET
        var params = url.parse(req.url, true).query;
        route(handle, pathname, res, params);
      }
    })

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
