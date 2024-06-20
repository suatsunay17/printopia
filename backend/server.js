import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import postsRoute from "./routes/postsRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {});

app.use("/posts", postsRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
