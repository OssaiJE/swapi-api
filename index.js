import path from "path";
import express from "express";
import dotenv from "dotenv";

import moviesRoute from "./routes/moviesRoute.js";
import peopleRoute from "./routes/peopleRoute.js";
import comment from "./routes/comment.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/movies", moviesRoute);
app.use("/api/people", peopleRoute);
app.use("/api/comment", comment);


const PORT = process.env.PORT || 4041;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
