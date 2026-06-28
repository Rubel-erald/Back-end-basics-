const controller = {
  get1: (req, res) => {
    res.json({ message: "hello get" });
  },
  post1: (req, res) => {
    res.json({ message: "hello post" });
  },
  put1: (req, res) => {
    res.json({ message: "hello put" });
  },
  delete1: (req, res) => {
    res.json({ message: "hello delete" });
  },
};

module.exports = controller;
