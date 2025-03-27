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
})
  
//----------------------------------------------------------------------------

/* POST add user in usersLike list */
router.post("/addUserLike", (req, res) => {
    const { username, content } = req.body;
  Tweet.updateOne(
    {content : content},
    { $push: { usersLike: username } }
    ).then((data) => {
        res.json({ result: true });
});
<<<<<<< HEAD
})
=======
});
>>>>>>> 6ec1c3c551c715b200d3283d6fe5cf46c9f87016

//----------------------------------------------------------------------------

/* POST remove user in usersLike list */
router.post("/deleteUserLike", (req, res) => {
    const { username, content } = req.body;
  Tweet.updateOne(
    {content : content},
    { $pull: { usersLike: username } }
    ).then((data) => {
        res.json({ result: true });
});
<<<<<<< HEAD
})
=======
});
>>>>>>> 6ec1c3c551c715b200d3283d6fe5cf46c9f87016

//----------------------------------------------------------------------------//----------------------------------------------------------------------------


//----------------------------------------------------------------------------

module.exports = router;
