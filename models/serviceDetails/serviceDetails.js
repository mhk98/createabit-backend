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
      text: {
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
