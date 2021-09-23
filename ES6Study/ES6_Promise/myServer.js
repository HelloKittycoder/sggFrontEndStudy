// 使用node.js启动一个web服务器
// http://nodejs.cn/learn/introduction-to-nodejs
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // 允许所有跨域请求
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`);
});