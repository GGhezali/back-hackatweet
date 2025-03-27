const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    firstname: String,
    username: String,
    time: String,
    content: String,
    usersLike: [String],
    hashtagList: [String],
})

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;