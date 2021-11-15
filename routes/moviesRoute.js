import express from "express";
import axios from "axios";
// const config = require("config");

const router = express.Router();

// @route    GET api/movies
// @desc     Get all movies
// @access   Public
router.get("/", async (req, res) => {
  try {
    const uri = encodeURI(`https://swapi.dev/api/films`);
    const headers = {
      "user-agent": "*",
    };

    const swapiResponse = await axios.get(uri, { headers });

    let movieList = [];

    swapiResponse.data.results.forEach((results) => {
      const { title, opening_crawl, release_date } = results;

      // TODO comment count to be made dynamic
      let newMovie = {
        title,
        opening_crawl,
        release_date,
        commentCount: [],
      };
      movieList.push(newMovie);
      
    });
  
    return res.status(200).json(movieList);
  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: "No Movies found" });
  }
});

export default router;
