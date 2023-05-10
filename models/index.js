const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(Blog, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
})

Blog.hasMany(Comment, {
    foreignKey: "blog_id",
    onDelete: 'CASCADE'
})

Comment.belongsTo(Blog, {
    foreignKey: "blog_id",
})

Blog.belongsTo(User, {
    foreignKey: "user_id",
})


module.exports = { User, Comment, Blog };
