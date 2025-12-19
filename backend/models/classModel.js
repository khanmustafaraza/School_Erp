const { Schema, model } = require("mongoose");
const classSchema = new Schema(
  {
    name: {
      type: String,
    },
    section: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Class = model("Class", classSchema);

module.exports = Class;
