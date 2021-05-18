const mongoose = require("mongoose");
const { Schema } = mongoose;
const classSchema = require("./Class");

const taskSchema = new Schema({
    description: String,
    classes: [classSchema],
    tags:[String],
    _user: { type: Schema.Types.ObjectId, ref: "User" },
  });
  
  mongoose.model("tasks", taskSchema);