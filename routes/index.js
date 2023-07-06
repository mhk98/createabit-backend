const router = require("express").Router();
const user = require("./user");
const service = require("./service");
const serviceDetails = require("./serviceDetails");

router.use("/user", user);
router.use("/service", service);
router.use("/service-details", serviceDetails);

module.exports = router;
