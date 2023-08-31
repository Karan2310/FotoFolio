import Post from "../models/Post.js";
import cloudinary from "../utils/cloudinary.js";

export const postImage = async (req, res) => {
  const { title, path, views, authorId, authorName, likes, comments } =
    req.body;

  try {
    const photoUrl = await cloudinary.uploader.upload(path, {
      upload_preset: "FotoFolio",
    });

    const post = new Post({
      title,
      path: photoUrl,
      views,
      authorId,
      authorName,
      likes,
      comments,
    });

    const savedPost = await post.save();
    res.status(200).send(savedPost);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(post);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
