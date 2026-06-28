const logger = (req, res, next) => {
  console.log("i am the first middleware");
  next();
};

const logger2 = (req, res, next) => {
  console.log("stopppp logger 2");
  next();
};

const errorHandler = (req, res, next) => {
  res.json({ message: "there is no such a end point" });
};

module.exports = {
  logger,
  logger2,
  errorHandler,
};
