const express = require("express");
const {
  createnewForm,
  getForm,
  getAllForms,
  addInputText,
  addInputSelect,
  addInputCheck,
} = require("../controllers/forms");

const router = express.Router();

router.route("/").post(createnewForm).get(getAllForms);

router.route("/:id").get(getForm);
router.route("/:id/text").put(addInputText);
router.route("/:id/select").put(addInputSelect);
router.route("/:id/check").put(addInputCheck);

module.exports = router;
