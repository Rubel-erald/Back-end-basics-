// creating a server using node.js
// first we need to import the http module
// const http = require("http");

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
// const server = http.createServer((req, res) => {
//   // console.log(req.url);
//   const parseURL = new URL(req.url, `http://${req.headers.host}`);
//   const pathname = parseURL.pathname;
//   const method = req.method;
//   if (pathname === "/") {
//     if (method === "GET") {
//       res.writeHead(200, { "content-type": "application/json" });
//       res.write(JSON.stringify({ message: "hello root" }));
//       res.end();
//     }
//   } else if (pathname === "/post") {
//     res.writeHead(200, { "content-type": "application/json" });
//     res.write(JSON.stringify({ message: "hello post" }));
//     res.end();
//   } else if (pathname === "/comments") {
//     res.writeHead(200, { "content-type": "application/json" });
//     res.write(JSON.stringify({ message: "hello comments" }));
//     res.end();
//   }
// });
// server.listen(3000, "localhost", () => {
//   console.log("server is running");
// });

// now we switched to express js
// importing the express js
// const express = require("express");

// // creating a server application using express() function
// const app = express();

// app.get("/", (req, res) => {
//   res.json({ message: "hello express js " });
// });

// // start the server to listen for http request
// app.listen(3001, "localhost", () => {
//   console.log("express js server is running");
// });

// middleware
// middleware is a simple function
const express = require("express");
const app = express();

// creating a middleware function
const logger = (req, res, next) => {
  console.log("i am the first middleware");
  next(); //it will allow to the next middleware
};

app.use(logger); //run the middleware

const logger2 = (req, res, next) => {
  console.log("stopppp logger 2");
  next();
};

app.use(logger2);

// end points with routs
app.get("/", (req, res) => {
  res.json({ message: "hello express js " });
});
app.post("/", (req, res) => {
  res.json({ message: "hello post" });
});
app.put("/", (req, res) => {
  res.json({ message: "hello put" });
});
app.delete("/", (req, res) => {
  res.json({ message: "hello delete" });
});

const errorHandler = (req, res, next) => {
  res.json({ message: "there is no such a end point" });
};
app.use(errorHandler);

// end points with name
app.get("/users", (req, res) => {
  res.json({ message: "hello users" });
});

app.listen(3001, "localhost", (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("express js server is running");
});
