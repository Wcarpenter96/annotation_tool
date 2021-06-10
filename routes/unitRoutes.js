const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const multer = require("multer");
const csvtojson = require("csvtojson");

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
    const csvDataRaw = await csvtojson().fromFile("tmp.csv")
    const csvData = []
    csvDataRaw.forEach(data => {
      data['id'] = uuidv4()
      csvData.push(data)
    })
    res.send({'page_0':csvData.slice(0,10)});
  });
};
