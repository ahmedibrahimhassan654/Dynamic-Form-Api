const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Form = require("../models/Forms");


// @desc      Create Form
// @route     POST /api/v1/Forms
// @access    public
exports.createnewForm = asyncHandler(async (req, res, next) => {
  // // Add user to req,body
  // req.body.user = req.user.id;

  // // Check for published bootcamp
  // const publishedBootcamp = await Bootcamp.findOne({ user: req.user.id });

  // // If the user is not an admin, they can only add one bootcamp
  // if (publishedBootcamp && req.user.role !== 'admin') {
  //   return next(
  //     new ErrorResponse(
  //       `The user with ID ${req.user.id} has already published a bootcamp`,
  //       400
  //     )
  //   );
  // }

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