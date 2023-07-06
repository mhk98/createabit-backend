module.exports = (sequelize, DataTypes) => {
  const ServiceDetails = sequelize.define(
    "serviceDetails",
    {
      ServiceDetails_Id: {
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
      text1: {
        type: DataTypes.STRING,
        Unique: true,
      },
      text2: {
        type: DataTypes.STRING,
        Unique: true,
      },
    },
    {
      updatedAt: false,
    }
  );

  return ServiceDetails;
};
