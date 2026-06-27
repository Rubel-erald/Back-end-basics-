// file system module
// provides an API for interacting with the file system
// allows you to read and write , manipulate files and directories
// lets says we want to read an existing file using node.js

// importing the file system module
const fs = require("fs");

// for reading the file (filename , output format , callbackfn)
// fs.readFile("./commits.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(data);
// });

// for creating a new file and write a content
// fs.writefile
// fs.writeFile(
//   "./dummyfsModule.txt",
//   "hello world this is a dummy page",
//   (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//   },
// );

// for changing the content in the existing file
// fs.appendFile
// fs.appendFile("dummyfsModule.txt" , "append content", (err) => {
//   if(err){
//     console.log(err)
//     return
//   }
// } )

// for deleting the file
// fs.unlink
// fs.unlink("dummyfsModule.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });
