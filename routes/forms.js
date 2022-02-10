const express = require("express");
const {
  createnewForm,
  getForm,
  getAllForms,
  addInputText,
} = require("../controllers/forms");

const router = express.Router();

router.route("/").post(createnewForm).get(getAllForms);

router.route("/:id").get(getForm);
router.route("/:id/text").put(addInputText);

module.exports = router;
