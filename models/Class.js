const mongoose = require("mongoose");
const { Schema } = mongoose;

const classSchema = new Schema({
    cls: String,
    color: String
  });
  
  module.exports = classSchema