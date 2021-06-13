const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const multer = require("multer");
const csvtojson = require("csvtojson");

const Task = mongoose.model("task");


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '')
  },
  filename: function (req, file, cb) {

      cb(null,  'tmp.csv' );
  }
});

var upload = multer({ storage: storage });

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

module.exports = (app) => {
  app.post("/api/units", requireLogin, upload.single('file'), async (req, res) => {
    const jsonData = req.body
    var csvDataRaw = await csvtojson().fromFile("tmp.csv")
    if (Array.isArray(jsonData)){
      csvDataRaw = jsonData
    }
    const csvData = []
    csvDataRaw.forEach(data => {
      if ('id' in data) {
        res.status(400).send(new Error('Column id name already exists!'));
      }
      data['id'] = uuidv4()
      csvData.push(data)
    })
    const user = req.user.id
    const opts = {
      new: true,
      upsert: true
    }
    // try {
      const task = await Task.findOneAndUpdate({
        _user: user
      },{
        units: csvData,
        _user: user
      },opts);
      // res.send({'page_0':csvData.slice(0,10)});
      res.send(csvData);
    // } catch (err) {
    //   res.status(422).send(err);
    // }
  });
};
