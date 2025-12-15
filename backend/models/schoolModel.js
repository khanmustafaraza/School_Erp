const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const schoolSchema = new Schema(
  {
    name: {
        type: String,
    },

    subName: {
        type: String,
    },

    code: {
      type: String,
    
    },
    affiCode: {
      type: String,
   
    },
    board: {
      type: String,
     
    },
    contact: {
      type: String,
    
    },
    email: {
      type: String,
    
     
    },
    address: {
      type: String,
     
    },
    school_photo: {
      type: String,
     
    },

   
  },
  { timestamps: true }
);

const School = model("School", schoolSchema);
module.exports = School;
