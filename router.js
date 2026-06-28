const express = require("express");
const { get1, post1, put1, delete1 } = require("./controller/controlFunction");

const routers = express.Router();

routers.get("/", get1);
routers.post("/", post1);
routers.put("/", put1);
routers.delete("/", delete1);


module.exports = routers;
