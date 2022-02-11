const mongoose = require("mongoose");

const checkBoxSchema = new mongoose.Schema(
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

    field_type: {
      type: String,
      default: "checkbox",
    },
    field_value: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("CheckBox", checkBoxSchema);
