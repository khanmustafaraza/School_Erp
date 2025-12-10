const express = require("express");
const router = express.Router();
const enquiryController = require("../controllers/enquiryController");

router.post("/register", enquiryController.enquiryRegister);
router.get("/enquiry-list", enquiryController.enquiryList);

module.exports = router;
