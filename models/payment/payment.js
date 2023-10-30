module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    "payment",
    {
      Payment_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      updatedAt: false,
    }
  );

  return payment;
};
