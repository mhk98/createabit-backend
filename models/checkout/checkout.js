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
      Company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      SubTotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      updatedAt: false,
    }
  );

  return checkout;
};
