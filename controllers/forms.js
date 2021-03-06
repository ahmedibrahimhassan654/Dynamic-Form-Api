const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Form = require("../models/Forms");
const Text = require("../models/Text");
const Select = require("../models/Select");
const CheckBox = require("../models/CheckBox");
// @desc      Create Form
// @route     POST /api/v1/Forms
// @access    public
exports.createnewForm = asyncHandler(async (req, res, next) => {
  const form = await Form.create(req.body);

  res.status(201).json({
    success: true,
    data: form,
  });
});

// @desc      Get single form
// @route     GET /api/v1/form/:id
// @access    Public
exports.getForm = asyncHandler(async (req, res, next) => {
  const form = await Form.findById(req.params.id);

  if (!form) {
    return next(
      new ErrorResponse(`form not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: form });
});

// @desc      Get all form
// @route     GET /api/v1/form
// @access    Public
exports.getAllForms = asyncHandler(async (req, res, next) => {
  const form = await Form.find({});

  if (!form) {
    return next(
      new ErrorResponse(`form not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: form });
});

// @desc      add input text
// @route     put /api/v1/form/:id/text
// @access    Public
exports.addInputText = asyncHandler(async (req, res, next) => {
  let form = await Form.findById(req.params.id);

  if (!form) {
    return next(
      new ErrorResponse(`form not found with id of ${req.params.id}`, 404)
    );
  }
  const {
    field_id,
    field_label,
    field_label_Ar,
    field_mandatory,
    field_placeholder,
    field_placeholder_Ar,
    field_type,
    field_value,
  } = req.body;
  const newInputText = {
    field_id,
    field_label,
    field_label_Ar,
    field_mandatory,
    field_placeholder,
    field_placeholder_Ar,
    field_type,
    field_value,
  };

  const inputText = await new Text(newInputText).save();

  // //find if the newinputtext is created
  await Form.updateOne(
    { _id: req.params.id },
    {
      $addToSet: {
        fields: newInputText,
      },
    }
  );

  const updatedForm = await Form.findById(req.params.id);

  res
    .status(200)
    .json({ success: true, data: updatedForm, enteredElement: newInputText });
});

// @desc      add input select
// @route     put /api/v1/form/:id/select
// @access    Public
exports.addInputSelect = asyncHandler(async (req, res, next) => {
  let form = await Form.findById(req.params.id);

  if (!form) {
    return next(
      new ErrorResponse(`form not found with id of ${req.params.id}`, 404)
    );
  }
  const {
    field_id,
    field_label,
    field_label_Ar,
    field_mandatory,
    field_placeholder,
    field_placeholder_Ar,
    field_type,
    field_value,
    field_options,
  } = req.body;

  const newInputSelect = {
    field_id,
    field_label,
    field_label_Ar,
    field_mandatory,
    field_placeholder,
    field_placeholder_Ar,
    field_type,
    field_value,
    field_options,
  };
  const inputSelect = await new Select(newInputSelect).save();

  //find if the newinputtext is created
  await Form.updateOne(
    { _id: req.params.id },
    {
      $addToSet: {
        fields: inputSelect,
      },
    }
  );
  const updatedForm = await Form.findById(req.params.id);

  res.status(200).json({ success: true, data: updatedForm });
});

// @desc      add input select
// @route     put /api/v1/form/:id/check
// @access    Public
exports.addInputCheck = asyncHandler(async (req, res, next) => {
  let form = await Form.findById(req.params.id);

  if (!form) {
    return next(
      new ErrorResponse(`form not found with id of ${req.params.id}`, 404)
    );
  }
  const {
    field_id,
    field_label,
    field_label_Ar,
    field_mandatory,
    field_placeholder,
    field_placeholder_Ar,
    field_type,
    field_value,
  } = req.body;

  const newInputcheckBox = {
    field_id,
    field_label,
    field_label_Ar,
    field_mandatory,
    field_placeholder,
    field_placeholder_Ar,
    field_type,
    field_value,
  };
  const inputCheckBox = await new CheckBox(newInputcheckBox).save();

  //find if the newinputtext is created
  await Form.updateOne(
    { _id: req.params.id },
    {
      $addToSet: {
        fields: inputCheckBox,
      },
    }
  );
  const updatedForm = await Form.findById(req.params.id);

  res.status(200).json({ success: true, data: updatedForm });
});
