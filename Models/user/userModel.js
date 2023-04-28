const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin", "reporter"],
  },
},{
    timestamps: true,
});

const User = model("User", userSchema);

module.exports = User;
