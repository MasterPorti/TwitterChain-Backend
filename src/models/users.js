const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  seed: {
    type: String,
    require: true,
  },
  name:{
    type: String,
    require: false,
  }
});

module.exports = mongoose.model("user", userSchema);
