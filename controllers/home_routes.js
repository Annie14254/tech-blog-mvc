const router = require('express').Router();
const { Blog, Comment, User } = require('../models');
const sequelize = require("../config/connection")
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  console.log("test")
    try {
      // Get all blogs with comments and user data
      const blogData = await Blog.findAll({
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
      console.log( { 
        blogs, 
        //logged_in: req.session.logged_in 
      })
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        blogs, 
        //logged_in: req.session.logged_in 
      });
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });

  router.get('/blog/:id', async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id, {
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
  
      const blog = blogData.get({ plain: true });
  
      res.render('blog', {
        ...blog,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Use withAuth middleware to prevent access to route
  router.get('/dashboard', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Blog }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('dashboard', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;