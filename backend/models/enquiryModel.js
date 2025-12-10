const { Schema, model } = require("mongoose");
const enquirySchema = new Schema(
  {
    fullName: {
      type: String,
    },
    phone: {
      type: String,
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Enquiry = model("Enquiry", enquirySchema);

module.exports = Enquiry;
