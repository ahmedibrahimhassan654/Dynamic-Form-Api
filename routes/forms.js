const express = require("express");
const {
  createnewForm,

} = require("../controllers/forms");

const router = express.Router();

router.route("/").post(createnewForm);

router.route("/:id");

module.exports = router;
