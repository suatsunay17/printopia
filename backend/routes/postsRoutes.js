import express from 'express';
import { Post } from '../models/forumPostModel.js';

const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const posts = await Post.find({});
  
      return res.status(200).json({
        count: posts.length,
        data: posts,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const post = await Post.findById(id);
  
      return res.status(200).json(post);
    } catch (error) {}
  });
  
  router.post("", async (req, res) => {
    try {
      if (!req.body.title || !req.body.content) {
        return res.status(400).send({
          message: "Fill all required fields",
        });
      }
      const newPost = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
      };
  
      const post = await Post.create(newPost);
  
      return res.status(201).send(post);
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ message: err.message });
    }
  });
  
  router.put("/:id", async (req, res) => {
    try {
      if (!req.body.title || !req.body.content) {
        return res.status(400).send({
          message: "Fill all required fields",
        });
      }
  
      const { id } = req.params;
      const result = await Post.findByIdAndUpdate(id, req.body);
  
      if (!result) {
        return res.status(404).json({ message: "Post not found!" });
      }
  
      return res.status(200).send({ message: "Post updated!" });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const result = await Post.findByIdAndDelete(id);
  
      if (!result) {
        return res.status(404).json({ message: "Post not found!" });
      }
  
      return res.status(200).send({ message: "Post deleted successfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });

  export default router;