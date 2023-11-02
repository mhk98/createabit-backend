const router = require("express").Router();
const user = require("../../controllers/user/user.controller");
const authorization = require("../../utils/authorization");
const { verifyToken } = require("../../utils/verifyToken");
// const recharge = require('../../models/recharge/recharge');

// router.post('/', user.userInsert);
// router.get('/cards/id', User.getCardByUserId);
// router.post('/', user.create);
// router.get('/', user.findAll);

router.post("/register", user.signup);
router.post("/login", user.login);
// router.get("/", verifyToken, authorization("super_admin"), user.getAllUsers);
router.get("/:id", user.getSingleUser);
router.get("/", user.getAllUsers);

module.exports = router;
