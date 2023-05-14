const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// User.hasMany(Blog, {
//     foreignKey: "user_id",
//     onDelete: 'CASCADE'
// })

Blog.hasMany(Comment, {
    foreignKey: "blog_id",
    onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: "user_id",
})

Comment.belongsTo(Blog, {
    foreignKey: "user_id",
})

Blog.belongsTo(User, {
    foreignKey: "user_id",
})

User.hasMany(Blog, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
})


module.exports = { User, Comment, Blog };
