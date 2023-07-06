// const { createResponse } = require("../../utils/responseGenerator");
const db = require("../../models");
const ServiceDetails = db.serviceDetails;

// console.log(User)

exports.updateServiceDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const serviceInfo = req.body;
    const result = await ServiceDetails.update(serviceInfo, {
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

exports.getAllServiceDetails = async (req, res) => {
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
