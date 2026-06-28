const express = require("express");
const { logger, logger2, errorHandler } = require("./middleware/logger");
const routers = require("./router");
const app = express();

app.use(logger);
app.use(logger2);

app.use("/" , routers)

app.use(errorHandler);
module.exports = app;
