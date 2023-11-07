module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define(
    "category",
    {
      Category_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Check: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      updatedAt: false,
    }
  );

  return category;
};
