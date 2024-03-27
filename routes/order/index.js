const router = require("express").Router();
const order = require("../../controllers/order/order.controller");

router.post("/create-order", order.createOrder);
router.get("/", order.getOrderProduct);
// router.delete("/:id", cart.deleteCartProduct);

module.exports = router;
