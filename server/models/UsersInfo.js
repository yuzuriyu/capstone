const mongoose = require("mongoose");

const UsersInfoSchema = new mongoose.Schema({
  uid: {
    type: String,
  },
  email: {
    type: String,
  },
  username: {
    type: String,
  },
  role: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  bio: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
});

const UsersInfoModel = mongoose.model(
  "usersInfos",
  UsersInfoSchema,
  "userInfos"
);

module.exports = UsersInfoModel;
