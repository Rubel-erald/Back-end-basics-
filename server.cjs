// creating a server using node.js
// first we need to import the http module
const http = require("http");
const { json } = require("stream/consumers");

// creating http server
// const server = http.createServer((req , res) => {
//     res.write("hello")
//     res.end()
// })

// run the http server using node filename
// server.listen(3000 , "localhost" , () => {
//     console.log("server is running");
// })

// understanding the header how thr response have to be
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "application/json" }); //=> 200 means status code
// //   res.writeHead(201, { "content-type": "text/plain" });
//   res.write(JSON.stringify({message : "hello world"}));
//   res.end();
// });
// server.listen(3000, "localhost", () => {
//   console.log("server is running");
// });

// making this server as restfull server , the server has to understand the methods get,post,put,delete
const server = http.createServer((req, res) => {
  // console.log(req.url);
  const parseURL = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parseURL.pathname;
  const method = req.method;
  if (pathname === "/") {
    if (method === "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.write(JSON.stringify({ message: "hello root" }));
      res.end();
    }
  } else if (pathname === "/post") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify({ message: "hello post" }));
    res.end();
  } else if (pathname === "/comments") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify({ message: "hello comments" }));
    res.end();
  }
});
server.listen(3000, "localhost", () => {
  console.log("server is running");
});
