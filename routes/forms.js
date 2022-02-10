const express = require("express");
const { createnewForm, getForm, getAllForms } = require("../controllers/forms");

const router = express.Router();

router.route("/").post(createnewForm).get(getAllForms);

router.route("/:id").get(getForm);

module.exports = router;
