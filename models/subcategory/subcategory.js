module.exports = (sequelize, DataTypes) => {
  const subcategory = sequelize.define(
    "subcategory",
    {
      SubCategory_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      updatedAt: false,
    }
  );

  return subcategory;
};
