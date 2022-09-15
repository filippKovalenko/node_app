import express from "express";
import {
  getPost,
  deletePost,
  putEditPost,
  getPosts,
  postAddPost,
} from "../controllers/api-post-controller.js";
const routerApiPost = express.Router();

routerApiPost.get("/api/post/:id", getPost);
routerApiPost.post("/api/post", postAddPost);
routerApiPost.get("/api/posts", getPosts);
routerApiPost.delete("/api/post/:id", deletePost);
routerApiPost.put("/api/post/:id", putEditPost);

export default routerApiPost;
