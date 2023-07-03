const router = require("express").Router();
const service = require("../../controllers/service/service.controller");

router.post("/create-service", service.createService);
router.get("/", service.getAllService);

module.exports = router;
