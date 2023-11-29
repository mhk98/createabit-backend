const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.generateToken = (userInfo) => {
  console.log("userInfo", userInfo);
  const payload = {
    id: userInfo.User_ID,
    Email: userInfo.Email,
    role: userInfo.role,
    Name: userInfo.Name,
  };

  // console.log("payload", payload);

  //Token generate
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: 60 * 60,
  });

  return token;
};
