const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    firstname: String,
    username: String,
    time: String,
    content: String,
    isLiked: Boolean,
    hashtagList: [String],
})

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;