const router = require('express').Router();

const userRoutes = require('./user_routes');
const blogRoutes = require('./Blogroutes')

router.use('/blog', blogRoutes)
router.use('/users', userRoutes);

module.exports = router;
