const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, trim: true    , minlength: 60, },
  orders: [
    { type: Schema.Types.ObjectId, ref: "order" },
  ],
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = { UserModel };
