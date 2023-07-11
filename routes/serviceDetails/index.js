const router = require("express").Router();
const serviceDetails = require("../../controllers/serviceDetails/serviceDetails.controller");
const { upload } = require("../../middlewares/upload");

router.put(
  "/update-service-details/:id",
  upload,
  serviceDetails.updateServiceDetails
);
router.get("/:id", serviceDetails.getSingleServiceDetails);

module.exports = router;
