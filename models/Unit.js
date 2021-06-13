const mongoose = require("mongoose");
const { Schema } = mongoose;

const unitSchema = new Schema({
    id: String
  });
  
  module.exports = unitSchema