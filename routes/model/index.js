const router = require("express").Router();
const model = require("../../controllers/model/mode.controller");

router.post("/create-model", model.createModel);
router.get("/", model.getAllModel);
router.get("/:id", model.getSingleModel);
router.delete("/", model.deleteModel);
router.put("/", model.updateModel);

module.exports = router;
