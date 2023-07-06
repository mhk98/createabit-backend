const router = require("express").Router();
const serviceDetails = require("../../controllers/serviceDetails/serviceDetails.controller");

router.put("/update-service-details/:id", serviceDetails.updateServiceDetails);
router.get("/:id", serviceDetails.getAllServiceDetails);

module.exports = router;
