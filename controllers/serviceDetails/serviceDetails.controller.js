// const { createResponse } = require("../../utils/responseGenerator");
const db = require("../../models");
const ServiceDetails = db.serviceDetails;

// console.log(User)

exports.updateServiceDetails = async (req, res, file) => {
  try {
    const { id } = req.params;
    const {
      title,
      text1,
      text2,
      question,
      shortText1,
      shortText2,
      shortText3,
      shortText4,
    } = req.body;

    const data = {
      title: title,
      text1: text1,
      text2: text2,
      question: question,
      shortText1: shortText1,
      shortText2: shortText2,
      shortText3: shortText3,
      shortText4: shortText4,
      image: req.file.path,
    };
    const result = await ServiceDetails.update(data, {
      where: { serviceServiceId: id },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully update service details",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getSingleServiceDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ServiceDetails.findOne({
      where: { serviceServiceId: id },
    });

    // console.log("insertService_Details", insertService_Details);

    res.status(200).send({
      status: "Success",
      message: "All service details here",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
