// import connection of sequelizeconsole
// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require("../db/db");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DataTypes } = require("sequelize");

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Connection re-synced");
  })
  .catch((err) => {
    console.log("Error on re-synced", err);
  });

// eslint-disable-next-line @typescript-eslint/no-var-requires
db.user = require("./user/user")(db.sequelize, DataTypes);
db.contact = require("../models/contact/contact")(db.sequelize, DataTypes);

db.product = require("./product/product")(db.sequelize, DataTypes);

db.cart = require("./cart/cart")(db.sequelize, DataTypes);
db.checkout = require("./checkout/checkout")(db.sequelize, DataTypes);
db.order = require("./order/order")(db.sequelize, DataTypes);
db.payment = require("./payment/payment")(db.sequelize, DataTypes);
db.category = require("./category/category")(db.sequelize, DataTypes);

// db.Course.hasMany(db.Intake, { foreignkey: "Course_Id" });
// db.Intake.belongsTo(db.Course, { foreignkey: "Course_Id" });

// db.Teacher.hasMany(db.Intake, { foreignkey: "Teacher_Id" });
// db.Intake.belongsTo(db.Teacher, { foreignkey: "Teacher_Id" });

db.cart.belongsTo(db.user, { foreignkey: "Id" });
db.user.hasMany(db.cart, { foreignkey: "Id" });

// db.shop.belongsTo(db.productCategory, { foreignkey: "ProductCategory_Id" });
// db.productCategory.hasMany(db.shop, { foreignkey: "ProductCategory_Id" });

// db.item.belongsTo(db.shop, { foreignkey: "Shop_Id" });
// db.shop.hasMany(db.item, { foreignkey: "Shop_Id" });

module.exports = db;
