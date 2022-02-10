const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema(
  {
    page_label: {
      type: String,
      required: [true, "Please add Form Label "],
    },
    form_language: {
      type: String,
      enum: ["Ar", "Eng"],
      default: "Eng",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Form", FormSchema);
