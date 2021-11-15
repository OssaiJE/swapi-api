import express from "express";
// import mysql from 'mysql'
import db from "../config/db.js";
// import axios from "axios";
// const config = require("config");

const router = express.Router();

// @route    GET api/createdb
// @desc     create database
// @access   Public
router.get("/", (req, res) => {
  try {
      
    let sql = "CREATE DATABASE swapiDB";
    db.query(sql, (err, result) => {
      if (err) throw err;
    //   console.log(result);
      res.send("Database swapiDB created....");
    });

    // return res.status(200).json(movieList);
  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: "DataBase NOT created." });
  }
});

export default router;
