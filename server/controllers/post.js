import Post from "../models/Post.js";
import cloudinary from "../utils/cloudinary.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

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

export const deletePost = async (req, res) => {
  const postId = req.params.postId;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    await cloudinary.uploader.destroy(post.path.public_id);

    await Post.findByIdAndRemove(postId);

    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const incrementView = async (req, res) => {
  const postId = req.params.postId;
  console.log(postId);

  try {
    const post = await Post.findById(postId);
    console.log(post);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    post.views += 1;
    await post.save();

    return res
      .status(200)
      .json({ message: "View count incremented successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
