module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define(
    "service",
    {
      Service_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      feature1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      feature2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      feature3: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      updatedAt: false,
    }
  );

  return Service;
};
