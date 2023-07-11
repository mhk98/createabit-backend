module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define(
    "productCategory",
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
      question: {
        type: DataTypes.STRING,
        Unique: true,
      },
      shortText1: {
        type: DataTypes.STRING,
        Unique: true,
      },
      shortText2: {
        type: DataTypes.STRING,
        Unique: true,
      },
      shortText3: {
        type: DataTypes.STRING,
        Unique: true,
      },
      shortText4: {
        type: DataTypes.STRING,
        Unique: true,
      },
    },
    {
      updatedAt: false,
    }
  );

  return ProductCategory;
};
