const mongoose = require("mongoose");
const { Schema } = mongoose;
const classSchema = require("./Class");
// const unitSchema = require("./Unit");

const taskSchema = new Schema({
    description: {type: String, default: '## Overview\n' +
    '\n' +
    '\n' +
    '---\n' +
    '\n' +
    'A brief overview of your task.\n' +
    '\n' +
    '## Steps\n' +
    '\n' +
    '\n' +
    '---\n' +
    '\n' +
    '1. Step 1\n' +
    '2. Step 2 \n' +
    '3. Step 3\n' +
    '\n' +
    '## Definitions\n' +
    '\n' +
    '\n' +
    '---\n' +
    '\n' +
    '* Definition 1\n' +
    '* Definition 2\n' +
    '* Definition 3\n' +
    '\n' +
    '## Examples\n' +
    '\n' +
    '\n' +
    '---\n' +
    '\n' +
    '| Example | Description |\n' +
    '|----|----|\n' +
    '| Example 1 | Description 1 |\n' +
    '| Example 2 | Description 2 |\n' +
    '\n' +
    '\\\n'},
    classes: [classSchema],
    tags:[String],
    units: [],
    workers: {type: Boolean, default: false},
    _user: { type: Schema.Types.ObjectId, ref: "User" },
  });
  
  mongoose.model("task", taskSchema);