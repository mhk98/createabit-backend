// const { createResponse } = require("../../utils/responseGenerator");
const db = require("../../models");
const Service = db.service;
const ServiceDetails = db.serviceDetails;

// console.log(User)

exports.createService = async (req, res, file) => {
  try {
    const { title, text, feature1, feature2, feature3 } = req.body;
    const result = await Service.create({
      title: title,
      text: text,
      feature1: feature2,
      feature2: feature2,
      feature3: feature3,
      image: req.file.path,
    });
    const insertService_Details = await ServiceDetails.create({
      serviceServiceId: result.Service_Id,
    });

    // console.log("insertService_Details", insertService_Details);

    res.status(200).send({
      status: "Success",
      message: "Successfully create service",
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

exports.getAllService = async (req, res) => {
  try {
    const result = await Service.findAll();

    // console.log("insertService_Details", insertService_Details);

    res.status(200).send({
      status: "Success",
      message: "Successfully got service",
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

exports.updateService = async (req, res, file) => {
  try {
    const { id } = req.params;

    const data = {
      image: req.file.path,
    };
    const result = await Service.update(data, {
      where: { Service_Id: id },
    });

    // console.log("insertService_Details", insertService_Details);

    res.status(200).send({
      status: "Success",
      message: "Successfully update service",
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

/**
 * 1. Check if Email and password are given
 * 2. Load user with email
 * 3. if not user send res
 * 4. compare password
 * 5. if password not correct send res
 * 6. check if user is active
 * 7. if not active send res
 * 8. generate token
 * 9. send user and token
 */
