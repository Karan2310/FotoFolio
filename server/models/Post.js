import mongoose from "mongoose";

const CommentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 500,
    },
    authorId: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    path: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      required: true,
      default: 0,
    },
    authorId: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [CommentSchema],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
