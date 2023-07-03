const router = require("express").Router();
const user = require("./user");
const service = require("./service");

router.use("/user", user);
router.use("/service", service);

module.exports = router;
