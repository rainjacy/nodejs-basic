const server = require("./11_server.js");
const handler = require("./11_handler.js");
const route = require("./11_router.js");

const handle = {};
handle["/"] = handler.home;
handle["/home"] = handler.home;
handle["/user"] = handler.user;
handle["/list"] = handler.list;
handle["/get"] = handler.get;
handle["/post"] = handler.post;

server.startServer(route, handle);