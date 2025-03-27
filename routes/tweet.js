require('../models/connection');

const express = require('express');
const router = express.Router();

const moment = require("moment");
const Tweet = require('../models/tweet');


//Route post
router.post('/add', (req, res) => {
    console.log("post ok")
    res.json({result: true})
})

//route get
//----------------------------------------------------------------------------

/* GET tweet list */
router.get("/", (req, res) => {
    Tweet.find().then((data) => {
      res.json({ data });
    });
  });
  
  
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
});

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
});

//----------------------------------------------------------------------------//----------------------------------------------------------------------------


module.exports = router;