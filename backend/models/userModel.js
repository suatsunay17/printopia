import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the User schema (simplified for this example)
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Other user fields...
});

// Create and export the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
