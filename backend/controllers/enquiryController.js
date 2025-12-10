const Enquiry = require("../models/enquiryModel");

const enquiryRegister = async (req, res) => {
  try {
    const { fullName, phone, subject, message } = req.body;
    // console.log(req.body);
    if (!fullName || !phone || !subject || !message) {
      return res.status(403).json({
        success: false,
        message: "All Fields are required",
      });
    }

    const savedEnquiry = await Enquiry.create(req.body);
    if (savedEnquiry) {
      res.status(201).json({
        success: true,
        message: "Thanks For Concern We will shortly notify You!",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while enquiry due to network",
    });
  }
};
const enquiryList = async (req, res) => {
  const searchValue = req.query.search || "";

  try {
    // console.log(req.body);
    const filter =
      searchValue.trim() !== ""
        ? {
            $or: [
              { fullName: { $regex: searchValue, $options: "i" } },
              { phone: { $regex: searchValue, $options: "i" } },
            ],
          }
        : {}; // ✅ empty filter = fetch all

    const enquiryListData = await Enquiry.find(filter);

    if (enquiryListData) {
      res.status(200).json({
        success: true,
        data: enquiryListData,
        message: "Fectched Successfully!",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while enquiry due to network",
    });
  }
};

module.exports = {
  enquiryRegister,
  enquiryList,
};
