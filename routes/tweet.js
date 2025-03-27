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

module.exports = router;