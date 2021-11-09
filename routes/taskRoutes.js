const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Task = mongoose.model("task");

module.exports = (app) => {
  app.get("/api/tasks", requireLogin, async (req, res) => {
    const opts = {
      new: true,
      upsert: true
    }
    const task = await Task.findOneAndUpdate({
      _user: req.user.id
    },{},opts)
    res.send(task);
  });

  app.post("/api/tasks", requireLogin, async (req, res) => {
    const user = req.user.id
    const opts = {
      new: true,
      upsert: true
    }
    const {
      description,
      classes,
      tags,
      header
    } = req.body;
    try {
      const task = await Task.findOneAndUpdate({
        _user: user
      },{
        description,
        classes,
        tags,
        header,
        _user: user
      },opts);
      res.send(task);
    } catch (err) {
      res.status(422).send(err);
    }
  })
}