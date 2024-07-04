const fs = require("fs");

function route(handle, path, res, params) {
  if (typeof handle[path] === "function") {
    handle[path](res, params);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + "/10_404.html", "utf8").pipe(res);
  }
}

module.exports = route;