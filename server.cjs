// creating a server using node.js
// first we need to import the http module
const http = require('http');

// creating http server 
const server = http.createServer((req , res) => {
    res.write("hello")
    res.end()
})


// run the http server using node filename 
server.listen(3000 , "localhost" , () => {
    console.log("server is running");
})

