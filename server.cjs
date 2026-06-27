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
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" }); //=> 200 means status code 
//   res.writeHead(201, { "content-type": "text/plain" });
  res.write(JSON.stringify({message : "hello world"}));
  res.end();
});
server.listen(3000, "localhost", () => {
  console.log("server is running");
});
