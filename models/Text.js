const mongoose = require("mongoose");

const TextSchema = new mongoose.Schema(
  {
    field_id: {
      type: String,
      required: [true, "Please add input text id "],
    },
    field_label: {
      type: String,
      required: [true, "Please add input text label "],
    },
    field_label_Ar: {
      type: String,
      required: [true, "Please add input text label_Ar "],
    },
    field_mandatory: {
      type: Boolean,
      default: false,
      required: [true, "Please add input text field_mandatory "],
    },
    field_placeholder: {
      type: String,
      required: [true, "Please add input text placeholder "],
    },
    field_placeholder_Ar: {
      type: String,
      required: [true, "Please add input text placeholder in arabic"],
    },
    field_type: {
      type: String,
      default: "text",
    },
    field_value: {
      type: String,
      default: "",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Text", TextSchema);
