import express from "express";
import db from "../config/db.js";

const router = express.Router();

// @route    GET api/comment/createdb
// @desc     create database
// @access   Public
router.get("/createdb", (req, res) => {
  try {
    let sql = "CREATE DATABASE heroku_01a7a053f210cd7";
    db.query(sql);
    //TODO: Proper error handling needed incase DB already exist
    res.send("Database created....");
  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: "DataBase NOT created." });
  }
});

// @route    GET api/comment/createtable
// @desc     create table 
// @access   Public
router.get("/createtable", (req, res) => {
  try {
    let sql =
      "CREATE TABLE `heroku_01a7a053f210cd7` . `comments`(id INT AUTO_INCREMENT PRIMARY KEY, comment VARCHAR(500),ip_address VARCHAR(20), date_added TIMESTAMP)";

    db.query(sql, (err, result) => {
      //TODO: Proper error handling needed incase table already exist
      if (err) throw err;
      res.send("comment table created ....");
    });

  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: "Table NOT created." });
  }
});

// @route    POST api/comment/add
// @desc     add comments
// @access   Public
router.post("/add", (req, res) => {
  try {

    // gets user IP address
    let ip_address = req.socket.remoteAddress;
    // gets comment from req.body
    let comment = req.body.comment;
    let addcomment = { comment, ip_address: `${ip_address}` };
    let sql = "INSERT INTO `heroku_01a7a053f210cd7` . `comments` SET ?";

    db.query(sql, addcomment, (err, result) => {
      if (err) throw err;
      res.send("comment inserted....");
    });

  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: "Comment NOT inserted" });
  }
});

// @route    GET api/comment
// @desc     get all comments
// @access   Public
router.get("/", (req, res) => {
  try {
    let sql =
      "SELECT comment, ip_address, date_added FROM `heroku_01a7a053f210cd7` . `comments` ORDER BY date_added DESC";

    db.query(sql, (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    });

  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: "Comment NOT inserted" });
  }
});

export default router;
