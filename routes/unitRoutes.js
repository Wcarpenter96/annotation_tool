const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const multer = require("multer");
const csvtojson = require("csvtojson");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {

      cb(null,  'test.csv' );

  }
});

var upload = multer({ storage: storage });

module.exports = (app) => {
  
  app.post("/api/units", requireLogin, upload.single('file'), async (req, res) => {
    const csvData = await csvtojson().fromFile("./uploads/test.csv")
    console.log(csvData);
    res.send({ message: "Successfully uploaded files" });
  });
};
