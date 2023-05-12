const router = require('express').Router();
const { Blog, Comment, User } = require('../models');
const sequelize = require("../config/connection")
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const blogData = await Blog.findAll({
        where: {
            user_id: req.session.user_id
        },
        include: [
          {
            model: Comment,
            attributes: ['id', 'content', 'date', 'user_id', 'blog_id'],
            include: {
                model: User,
                attributes: ['username']
            }
          },
          {
            model: User,
            attributes: ['username']
          }
        ],
      });
  
      // Serialize data so the template can read it
      const blogs = blogData.map((blog) => blog.get({ plain: true }));
      console.log(blogs)
  
      // Pass serialized data and session flag into template
      res.render('dashboard', { 
        blogs, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;