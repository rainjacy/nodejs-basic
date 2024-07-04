const fs = require("fs");
const data = require("./10_data.json")

function home(res) {
  // 设置响应头
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(__dirname + "/10_home.html", "utf8").pipe(res);
}

function user(res) {
  // 设置响应头
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function list(res) {
  // 设置响应头
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var list = [
    {
      name: "张三"
    },
    {
      name: "李四"
    }
  ]
  res.end(JSON.stringify(list));
}

function get(res, params) {
  // 设置响应头
  res.writeHead(200, { 'Content-Type': 'application/json' });
  console.log(params);
  res.end(JSON.stringify(params));
}

function post(res, params) {
  // 设置响应头
  res.writeHead(200, { 'Content-Type': 'application/json' });
  console.log(params);
  res.end(JSON.stringify(params));
}

module.exports = {
  home,
  user,
  list,
  get,
  post
}