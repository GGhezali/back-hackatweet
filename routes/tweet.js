require("../models/connection");

const express = require("express");
const router = express.Router();

const moment = require("moment");
const Tweet = require("../models/tweet");

//Route post
router.post("/", (req, res) => {
  //Create new tweet
  const newTweet = new Tweet({
    firstname: req.body.firstname,
    username: req.body.username,
    time: req.body.time,
    content: req.body.content,
    usersLike: req.body.usersLike,
    hashtagList: req.body.hashtagList,
  });
  newTweet.save().then((newDoc) => {
    res.json({ result: true, newDoc });
  });
});

//route get
//----------------------------------------------------------------------------

/* GET tweet list */
router.get("/", (req, res) => {
  Tweet.find().then((data) => {
    res.json({ data });
  });
});

//----------------------------------------------------------------------------

module.exports = router;
