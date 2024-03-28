const router = require("express").Router();
const user = require("../../controllers/user/user.controller");
const auth = require("../../middlewares/auth");
const { upload } = require("../../middlewares/upload");

router.post("/signup", upload, user.signup);
router.post("/login", user.login);
router.post("/refresh-token", user.refreshToken);
router.get("/", user.getAllUsers);
router.get("/:id", user.getSingleUser);

module.exports = router;
