import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the Comment subdocument schema
const commentSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Define the Post schema
const postSchema = new Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  comments: [commentSchema],
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

// Middleware to update the updatedAt field before saving
postSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create and export the Post model
export const Post = mongoose.model('Post', postSchema);

