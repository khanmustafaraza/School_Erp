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
const Class = model("Classes", classSchema);

module.exports = Class;
