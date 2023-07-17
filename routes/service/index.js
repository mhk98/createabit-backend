const router = require("express").Router();
const service = require("../../controllers/service/service.controller");
const { upload } = require("../../middlewares/upload");

router.post("/create-service", upload, service.createService);
router.put("/:id", upload, service.updateService);
router.get("/", service.getAllService);

module.exports = router;
