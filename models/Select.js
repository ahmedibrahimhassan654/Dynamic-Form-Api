const mongoose = require("mongoose");

const SelectSchema = new mongoose.Schema(
  {
    field_id: {
      type: String,
      required: [true, "Please add input Select id "],
    },
    field_label: {
      type: String,
      required: [true, "Please add input select label "],
    },
    field_label_Ar: {
      type: String,
      required: [true, "Please add input select label in arabic"],
    },
    field_mandatory: {
      type: Boolean,
      default: false,
    },
    field_placeholder: {
      type: String,
      required: [true, "Please add input select placeholder "],
    },
    field_placeholder_Ar: {
      type: String,
      required: [true, "Please add input select placeholder in arabic"],
    },
    field_type: {
      type: String,
      default: "select",
    },
    field_options: [
      {
        option_label: {
          type: String,
          required: [true, "Please add at least one input select option "],
        },
      },
    ],
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

module.exports = mongoose.model("Select", SelectSchema);
