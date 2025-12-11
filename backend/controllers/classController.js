const Class = require("../models/classModel");

const classRegister = async (req, res) => {
  try {
    const { name, section } = req.body;

    if (!name || !section) {
      return res.status(403).json({
        success: false,
        message: "All Fields are required",
      });
    }
    const query =  {
      $and :[
        {
          name:name,
          section:section
        }
      ]
    }
const exsistClass = await Class.findOne(query);
if(exsistClass){
return res.status(200).json({
      success: false,
      message: "Class With section Alreday exsist",
    });
}
    const newClass = new Class({
      name,
      section,
    });
    await newClass.save();
    return res.status(201).json({
      success: true,
      message: "Class Created Successfylly",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while registration due to network",
    });
  }
};

const classUpdate = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID format before using it in a query
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Invalid class ID format",
      });
    }

    const updatedClass = await Class.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true } // runValidators ensures schema rules apply
    );

    if (!updatedClass) {
      return res.status(404).json({
        success: false,
        message: "Class not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Class updated successfully",
      data: updatedClass,
    });
  } catch (error) {
    console.error("Error updating class:", error);
    res.status(500).json({
      success: false,
      message: "Error updating class. Please try again later.",
      error: error.message,
    });
  }
};

const classList = async (req, res) => {
  try {
    const classes = await Class.find({});
    console.log(classes)

    if (!classes) {
      return res.status(400).json({
        success: false,
        message: `Error While Fechting`,
      });
    }
    return res.status(200).json({
      success: true,
      message: `All Admin Fectched Successfully`,
      data: classes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while Fetching",
    });
  }
};

module.exports = {
  classRegister,
  classUpdate,
  classList,
};
