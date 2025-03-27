require('../models/connection');

const express = require('express');
const router = express.Router();
const moment = require("moment");

const Tweet = require('../models/tweet');


//Route post

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