const mongoose = require("mongoose");
const { Schema } = mongoose;
const classSchema = require("./Class");

const taskSchema = new Schema({
    description: String,
    classes: [classSchema],
    tags:[String],
    workers: {type: Boolean, default: false},
    _user: { type: Schema.Types.ObjectId, ref: "User" },
  });
  
  mongoose.model("task", taskSchema);