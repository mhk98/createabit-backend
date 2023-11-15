module.exports = (sequelize, DataTypes) => {
  const checkout = sequelize.define(
    "checkout",
    {
      checkout_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      LastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      Country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      City: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Area: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PostCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Phone: {
        type: DataTypes.STRING,
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
      SubTotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Shipping_FirstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Shipping_LastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Shipping_Address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      updatedAt: false,
    }
  );

  return checkout;
};
