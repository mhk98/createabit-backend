module.exports = (sequelize, DataTypes) => {
    const ProductDetails2 = sequelize.define(
      "productDetails2",
      {
        Item_Id: {
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
  
    return ProductDetails2;
  };
  