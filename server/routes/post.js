import express from "express";
import { postImage, getPosts } from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/upload", postImage);

export default router;
