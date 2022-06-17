const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User has many posts
// Post belongs to User
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

//User has many Comments
//Comments belong to User
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

//Post has many Comments
//Comment belongs to Post
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = {User, Post, Comment};