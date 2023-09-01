import express from "express";
import { postImage, getPosts, incrementView } from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/upload", postImage);
router.post("/view/:postId", incrementView);

export default router;
