const router = require("express").Router();
const service = require("../../controllers/service/service.controller");
const { upload } = require("../../middlewares/upload");

router.post("/create-service", upload, service.createService);
router.get("/", service.getAllService);

module.exports = router;
