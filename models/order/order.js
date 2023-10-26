module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      Order_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      orderDetails: {
        type: DataTypes.JSON, // Use JSON data type for the order details
        allowNull: false,
        get: function () {
          return JSON.parse(this.getDataValue("orderDetails"));
        },
        set: function (val) {
          return this.setDataValue("orderDetails", JSON.stringify(val));
        },
      },
      subtotal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      updatedAt: false,
    }
  );

  return order;
};
