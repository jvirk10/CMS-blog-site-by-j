const { Comment } = require('../models');

const userComments = [
    {
        user_id: 4,
        post_id: 1,
        comment_text: "Great Job!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Looks good"
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "I feel it needs some more development"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "It can be better"
    },
    {
        user_id: 5,
        post_id: 6,
        comment_text: "This is amazing"
    },
    {
        user_id: 6,
        post_id: 5,
        comment_text: "Thank you for sharing this article"
    },
    {
        user_id: 7,
        post_id: 4,
        comment_text: "Very useful tool!"
    },
    {
        user_id: 8,
        post_id: 3,
        comment_text: "Love the work"
    },
    {
        user_id: 9,
        post_id: 2,
        comment_text: "This is cool"
    },
    {
        user_id: 10,
        post_id: 1,
        comment_text: "I don't like it"
    },
    {
        user_id: 12,
        post_id: 11,
        comment_text: "Could be better"
    },
    {
        user_id: 11,
        post_id: 12,
        comment_text: "Nice"
    }
]

const seedComments = () => Comment.bulkCreate(userComments);

module.exports = seedComments;