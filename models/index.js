// import connection of sequelizeconsole
// eslint-disable-next-line @typescript-eslint/no-var-requires
const db = require("../db/db");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DataTypes } = require("sequelize");

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Connection re-synced");
  })
  .catch((err) => {
    console.log("Error on re-synced", err);
  });

// eslint-disable-next-line @typescript-eslint/no-var-requires
db.user = require("./user/user")(db.sequelize, DataTypes);
db.service = require("./service/service")(db.sequelize, DataTypes);
db.serviceDetails = require("./serviceDetails/serviceDetails")(
  db.sequelize,
  DataTypes
);
db.product = require("./product/product")(db.sequelize, DataTypes);
db.productCategory1 = require("./productCategory1/productCategory1")(
  db.sequelize,
  DataTypes
);
db.productCategory2 = require("./productCategory2/productCategory2")(
  db.sequelize,
  DataTypes
);
db.productCategory3 = require("./productCategory3/productCategory3")(
  db.sequelize,
  DataTypes
);

db.productDetails1 = require("./productDetails1/productDetails1")(
  db.sequelize,
  DataTypes
);
db.productDetails2 = require("./productDetails2/productDetails2")(
  db.sequelize,
  DataTypes
);
db.productDetails3 = require("./productDetails3/productDetails3")(
  db.sequelize,
  DataTypes
);

db.cart = require("./cart/cart")(
  db.sequelize,
  DataTypes
);

// db.Course.hasMany(db.Intake, { foreignkey: "Course_Id" });
// db.Intake.belongsTo(db.Course, { foreignkey: "Course_Id" });

// db.Teacher.hasMany(db.Intake, { foreignkey: "Teacher_Id" });
// db.Intake.belongsTo(db.Teacher, { foreignkey: "Teacher_Id" });

db.service.hasMany(db.serviceDetails, { foreignkey: "Service_Id" });
db.serviceDetails.belongsTo(db.service, { foreignkey: "Service_Id" });

db.productCategory1.hasMany(db.productDetails1, {
  foreignkey: "ProductCategory_Id",
});
db.productDetails1.belongsTo(db.productCategory1, {
  foreignkey: "ProductCategory_Id",
});

db.productCategory2.hasMany(db.productDetails2, {
  foreignkey: "ProductCategory_Id",
});
db.productDetails2.belongsTo(db.productCategory2, {
  foreignkey: "ProductCategory_Id",
});

db.productCategory2.hasMany(db.productDetails2, {
  foreignkey: "ProductCategory_Id",
});
db.productDetails2.belongsTo(db.productCategory2, {
  foreignkey: "ProductCategory_Id",
});

// db.productCategory.belongsTo(db.product, { foreignkey: "Product_Id" });
// db.product.hasMany(db.productCategory, { foreignkey: "Product_Id" });

// db.shop.belongsTo(db.productCategory, { foreignkey: "ProductCategory_Id" });
// db.productCategory.hasMany(db.shop, { foreignkey: "ProductCategory_Id" });

// db.item.belongsTo(db.shop, { foreignkey: "Shop_Id" });
// db.shop.hasMany(db.item, { foreignkey: "Shop_Id" });

module.exports = db;
