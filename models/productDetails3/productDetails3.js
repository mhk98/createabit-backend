module.exports = (sequelize, DataTypes) => {
  const ProductDetails3 = sequelize.define(
    "productDetails3",
    {
      Shop_Id: {
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

  return ProductDetails3;
};
