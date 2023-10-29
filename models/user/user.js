const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const usertbls = sequelize.define(
    "usertbls",
    {
      User_ID: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
      },
      // User_Type: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
      // User_FirstName: {
      //   type: DataTypes.STRING(30),
      //   allowNull: true,
      // },
      User_Name: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      User_Email: {
        type: DataTypes.STRING(64),
        allowNull: true,
        // validate: [validator.isEmail, "Provide a valid Email"],
        unique: true,
        required: [true, "Email address is required"],
      },

      pass_word: {
        type: DataTypes.STRING,
        allowNull: true,
        required: [true, "Password is required"],
      },

      role: {
        type: DataTypes.STRING,
        defaultValue: "user",
        enum: ["user", "admin", "super_admin"],
      },
    },

    {
      hooks: {
        beforeCreate: async (user) => {
          if (user.pass_word) {
            const salt = await bcrypt.genSaltSync(10);
            user.pass_word = bcrypt.hashSync(user.pass_word, salt);
          }
        },
      },
    }
  );
  usertbls.prototype.validPassword = async (pass_word, hash) => {
    return await bcrypt.compareSync(pass_word, hash);
  };
  usertbls.prototype.getHashPass = async (pass_word) => {
    const salt = await bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(pass_word, salt);
    return hashed;
  };
  return usertbls;
};
