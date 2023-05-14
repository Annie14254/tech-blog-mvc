const router = require('express').Router();
const homeRoutes = require('./home_routes');
const dashboardRoutes = require('./dashboard_routes')
const apiRoutes = require('./api');


router.use('/api', apiRoutes)
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes)

module.exports = router;
