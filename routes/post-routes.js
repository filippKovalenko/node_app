import express from "express";
import {
  getPost,
  deletePost,
  getEditPost,
  putEditPost,
  getPosts,
  getAddPost,
  postAddPost,
} from "../controllers/post-controller.js";
const routerPost = express.Router();

routerPost.get("/posts/:id", getPost);
routerPost.put("/edit/:id", putEditPost);
routerPost.get("/edit/:id", getEditPost);
routerPost.delete("/posts/:id", deletePost);
routerPost.get("/posts", getPosts);
routerPost.post("/add-post", postAddPost);
routerPost.get("/add-post", getAddPost);

export default routerPost;
