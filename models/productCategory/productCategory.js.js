module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define(
    "productCategory",
    {
      ProductCategory_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      image: {
        type: DataTypes.STRING,
      },

      title: {
        type: DataTypes.STRING,
      },

      text: {
        type: DataTypes.STRING,
        Unique: true,
      },
    },
    {
      updatedAt: false,
    }
  );

  return ProductCategory;
};
